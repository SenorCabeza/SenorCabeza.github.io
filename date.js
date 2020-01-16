try {
    options = {
        weekday: "short",
        day: "numeric",
        months: "long",
        year: "numeric"
 
    };
    document.getElementById("currentdate") .textcontent = new Date() .toLocaleDateString("en-US", options);
} catch (e){
alert("Error with code or your browser does not support Locale");
}
