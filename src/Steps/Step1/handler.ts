
export const handler = async(event: any) => {
    const { Token } = event;
    //Validacao Token
    if(Token !== 'XXXX'){
        throw new Error(`Invalid token : ${Token}`)
    }
    // Fetch das info

    return {...event, Username: 'HANDS ON'};

}