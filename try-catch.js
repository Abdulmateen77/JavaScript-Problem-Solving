function errorHandler(x) {
    try{
        let num = getX(x);
        return num;
    } catch (error){
        console.error("An error occurred:", error.message);
        return null;

    }

}

function getX(x) {
    if(x == 5) {
        return new Error("Error Occured");
    }
    return x;
}
