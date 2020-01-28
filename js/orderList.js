
var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
function checkDate(){
    var date = document.getElementById("orderDate");
    console.log((date.value));
    var d = new Date(date.value);
    var n =d.getDay();

    if(n != 5){
        alert('Please select a valid Friday');
        document.getElementById("orderDate").value = 'dd/mm/yyyy';
    }else{
        getOrders(d)
    }



}

function getOrders(d) {

    var client = new HttpClient();

    client.get('/list', function (response) {
        console.log(typeof response)
        var orderlist = JSON.parse(response);
        var noOfOrders = Object.size(orderlist);


        for (var i = 0; i < noOfOrders; i++) {
            console.log(orderlist[i].orderDate);
            
              
        
        }
        console.log(noOfOrders);
        if (noOfOrders > 0) {


            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
            table.style.width = '50%';
            table.setAttribute('border', '1');
            table.setAttribute('cellspacing', '0');
            table.setAttribute('cellpadding', '5');

            // retrieve column header ('Name', 'Email', and 'Mobile')

            var col = []; // define an empty array
            for (var i = 0; i < noOfOrders; i++) {
                for (var key in orderlist[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE TABLE HEAD .
            var tHead = document.createElement("thead");


            // CREATE ROW FOR TABLE HEAD .
            var hRow = document.createElement("tr");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                hRow.appendChild(th);
            }
            tHead.appendChild(hRow);
            table.appendChild(tHead);

            // CREATE TABLE BODY .
            var tBody = document.createElement("tbody");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < noOfOrders; i++) {

                var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


                for (var j = 0; j < col.length; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = orderlist[i][col[j]];
                    bRow.appendChild(td);
                }
                tBody.appendChild(bRow)

            }
            table.appendChild(tBody);


            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("orderList");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

        }

    });

    document.getElementById("orderContainer").style.display = "block";
    document.getElementById("orderContainer").style.animationName = "bounceInDown";
    document.getElementById("orderContainer").style.animationDuration = "2s";
    document.getElementById("body").style.overflow = "hidden";



}

function addBorder() {
    document.getElementById("close").style.border = 'solid';
    document.getElementById("close").style.borderColor = 'lightgray';
    document.getElementById("close").style.borderWidth = '1px';

}


function remBorder() {

    document.getElementById("close").style.borderColor = 'white';
}
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};