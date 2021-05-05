const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3030;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/display', (req, res) => {
    let acc_type = req.body.account;
    let first_name = req.body.first;
    let middle_name = req.body.middle;
    let last_name = req.body.last;
    let suffix = req.body.suffix;
    let id = req.body.num;
    let str1 = "";
    for(var i = 0; i < id.length; i++) {
        // str.concat(str, street[i]);
        if (i == id.length - 1) {
            str1 += id[i];
        }

        else{
            str1 += id[i] + "-";
        }
    }
    let str3 = "";
    let dob = req.body.dob;
    for(var i = 0; i < dob.length; i++) {
        // str.concat(str, street[i]);
        if (i == dob.length - 1) {
            str3 += dob[i];
        }

        else{
            str3 += dob[i];
            // str3 += dob[i].concat(dob[i], "-");
            str3 += "-";
        }
    }
    let street = req.body.street;
    let str2 = "";
    for(var i = 0; i < street.length; i++) {
        // str.concat(str, street[i]);
        if (i == street.length - 1) {
            str2 += street[i];
        }

        else{
            str2 += street[i] + ", ";
        }
    }

    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;
    let str4 = "";
    for(var i = 0; i < zip.length; i++) {
        // str.concat(str, street[i]);
        if (i == zip.length - 1) {
            str4 += zip[i];
        }

        else{
            str4 += zip[i] + "-";
            // str4 += zip[i].concat(zip[i], "-");
        }
    }

    let phone = req.body.phone;
    let str5 = "";
    for(var i = 0; i < phone.length; i++) {
        // str.concat(str, street[i]);
        if (i == phone.length - 1) {
            str5 += phone[i];
        }

        else{
            str5 += phone[i] + "-";
        }
    }

    let license = req.body.license;
    let state1 = req.body.state;
    let exp = req.body.exp;
    let str6 = "";
    for(var i = 0; i < exp.length; i++) {
        // str.concat(str, street[i]);
        if (i == exp.length - 1) {
            str6 += exp[i];
        }

        else{
            str6 += exp[i] + "-";
        }
    }
    res.send(`<h1>Account Type : ${acc_type}<br>First name : ${first_name}<br>Middle Name or Initial : ${middle_name}<br>Last Name : ${last_name}<br>Suffix : ${suffix}<br>Taxpayer Identification Number : ${str1}<br>Date of Birth : ${str3}<br>Street Address : ${str2}<br>City : ${city}<br>State : ${state}<br>Zip Code : ${str4}<br>Home : ${str5}<br>Driver's License : ${license}<br>Issuing State : ${state}<br>Expiration Date : ${str6}`);
})

app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})