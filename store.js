var txt;

function decetr() {
    var i = 0;
    while (txt[i] != " ") {
        i++;
    }
    var dislikes = txt.substring(i+1);
    var likes = txt.substring(0, i);
    const cars = [likes, dislikes];
    return cars;
}

function readTextFile()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'number.txt', false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                txt = allText;
            }
        }
    }
    rawFile.send(null);
}