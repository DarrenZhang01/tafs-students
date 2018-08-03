// This is the mocha testing file for get_info.php
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const base64o = require("../../src/base64js.min.js");
const base64 = base64o.base64;

describe("Test Student Survey API", function() {
    it("Should return TA info for override token HLF43W", async function() {
        let fetched = await fetch(
            "http://localhost:3000/student_survey.php?what=get_ta&user_id=student1&override_token=HLF43W"
        );
        expect(fetched).to.have.status(200);
        let fetchedJSON = await fetched.json();
        expect(fetchedJSON).to.have.nested.property("TYPE");
        expect(fetchedJSON).to.have.nested.property("DATA");
        expect(fetchedJSON.TYPE).to.equal("ta_package");
    });

    it("Should return survey question package for override token HLF43W", async function() {
        let fetched = await fetch(
            "http://localhost:3000/student_survey.php?what=get_surveys&user_id=student1&override_token=HLF43W"
        );
        expect(fetched).to.have.status(200);
        let fetchedJSON = await fetched.json();
        expect(fetchedJSON).to.have.nested.property("TYPE");
        expect(fetchedJSON).to.have.nested.property("DATA");
        expect(fetchedJSON.TYPE).to.equal("survey_package");
    });
});
