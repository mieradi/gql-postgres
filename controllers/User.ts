import { pool } from "../index";
const { v4: uuidV4 } = require('uuid');
import { handleConfirmAndHashPassword, handleDateNow, handleParseUserDetails } from "../Helpers";
import { IUser } from "../types/UserType";

/**
* @name create
* @name findAll
* @name findOne
* @name findOneAndUpdate
*/

export const User =  {

    /**
    * @name create
    * @desc create new User
    * @returns user object
    */

   create: async (args:{ input: IUser }, ): Promise<void | IUser> => {

        let { first_name, last_name, password, confirm_password, email } = args.input;
        // parse user details
        const parsedUserDetails = await handleParseUserDetails(first_name,last_name,email);

        // encrypt user password
        const confirmedAndHashedPassword = await handleConfirmAndHashPassword(password,confirm_password!);

        // query DB
        const query = `INSERT INTO users
                        (user_id, first_name, last_name, email, created_at, updated_at, password)
                        VALUES ($1, $2, $3, $4, $5, $6, $7)
                        RETURNING user_id, first_name, last_name, email
                       `;

        const values = [
            uuidV4(),
            parsedUserDetails.parsedFirstName,
            parsedUserDetails.parsedLastName,
            parsedUserDetails.parsedEmail,
            handleDateNow(),
            handleDateNow(),
            confirmedAndHashedPassword
        ];

        // create User
        return await pool.query(query,values)
        .then((data:any): Promise<IUser> => data.rows[0])
        .catch((error:Error):void => console.error(error));
   },

    /**
    * @name findAll
    * @desc get all users
    * @returns array of user objects
    */

    findAll: async ():Promise<void | IUser[]> => {
        const query = `SELECT * FROM users`;

        return await pool.query(query)
        .then((data:any): Promise<IUser[]> => data.rows)
        .catch((error:Error):void => console.error(error));
    },

    /**
    * @name findOne
    * @desc Get user by ID
    * @param {string} param user id
    * @returns user object or error
    */

    findOne: async (id:string): Promise<void | IUser> => {
        const query = `SELECT * FROM users WHERE user_id = $1`;

        const values = [id];

        return await pool.query(query,values)
        .then((data:any): Promise<IUser> => data.rows[0])
        .catch((error:Error):void => console.error(error));
    },

    /**
    * @name findOneAndUpdate
    * @desc finds user by ID and updates values
    * @param {} param desc
    * @returns updated user object
    */

    findOneAndUpdate: async (id:string, args:{first_name:string,last_name:string,email:string}): Promise<void | IUser> => {
          const query = `UPDATE users
                SET first_name = $2, last_name = $3, email = $4, updated_at = $5
                WHERE user_id = $1
                RETURNING first_name, last_name, email
                `;

        const values = [id, args.first_name, args.last_name, args.email, handleDateNow()];

         return await pool.query(query,values)
                .then((data:any): Promise<IUser> => data.rows[0])
                .catch((error:Error):void => console.error(error));
    }
}
