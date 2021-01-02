import bcrypt from 'bcryptjs';

/**
*
* @name handleParseUserDetails
* @name handleEncryptPassword
* @name handleConfirmAndHashPassword
* @name handleParseDate
* @name handleDateNow
*/

/**
* @name handleParseUserDetails
* @desc description here
* @param {} param desc
* @returns returns desc
*/
interface HandleParseUserDetailsProps {
    parsedFirstName:string;
    parsedLastName: string;
    parsedEmail:string;
}
export function handleParseUserDetails(firstName:string,lastName:string,email:string): HandleParseUserDetailsProps {
        const parsedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const parsedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        const parsedEmail = email.toLowerCase();
        return {parsedFirstName,parsedLastName,parsedEmail};
    }

/**
* @name handleEncryptPassword
* @desc description here
* @param {} param desc
* @returns returns desc
*/

export async function handleEncryptPassword(password:string): Promise<String> {
    return await bcrypt.hash(password, 10);
}

/**
* @name handleConfirmAndHashPassword
* @desc description here
* @param {} param desc
* @returns returns desc
*/

export async function handleConfirmAndHashPassword(password:string, confirmPassword:string | null): Promise<any> {

    if(confirmPassword !== null) {
        if(password === confirmPassword){
            return await handleEncryptPassword(password);
        }
        else {
            throw new Error('Passwords do not match.');

        }
    } else {
        return await handleEncryptPassword(password);
    }
}

/**
* @name handleParseDate
* @desc description here
* @param {} param desc
* @returns returns desc
*/

export function handleParseDate(dateToParse:Date):string {
    return new Date(dateToParse).toISOString()
}

/**
* @name handleDateNow
* @desc description here
* @param {} param desc
* @returns returns desc
*/

export function handleDateNow():string {
    return new Date(Date.now()).toISOString();
}
