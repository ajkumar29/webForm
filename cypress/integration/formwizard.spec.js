describe("Renders Form Wizard", () => {
  it("Can display subheaders for the different pages", () => {
    cy.visit("/");

    cy.get(".selected").should(
      "have.css",
      "background-color",
      "rgb(22, 146, 162)"
    );
    cy.get(".selected").should("have.text", "User");

    cy.get(".pageHeader > :nth-child(2)").should(
      "have.css",
      "background-color",
      "rgb(162, 37, 22)"
    );
    cy.get(".pageHeader > :nth-child(2)").should("have.text", "Privacy");

    cy.get(".pageHeader > :nth-child(3)").should(
      "have.css",
      "background-color",
      "rgb(162, 37, 22)"
    );
    cy.get(".pageHeader > :nth-child(3)").should("have.text", "Done");
  });

  it("Can submit and go to next page", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get("#dropdown_role").select("Software engineer");
    cy.get("#textbox_email").type("test@gmail.com");
    cy.get("#textbox_password").type("Password123");
    cy.get('[type="submit"]').click();
    cy.get(".selected").should(
      "have.css",
      "background-color",
      "rgb(22, 146, 162)"
    );
    cy.get(".selected").should("have.text", "Privacy");
    cy.get(".completed").should(
      "have.css",
      "background-color",
      "rgb(79, 169, 22)"
    );
    cy.get(".completed").should("have.text", "User");

    cy.get("#textbox_name").should("not.exist");
    cy.get("#textbox_email").should("not.exist");
    cy.get("#textbox_password").should("not.exist");
  });

  it("Can submit form end to end", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get("#dropdown_role").select("Software engineer");
    cy.get("#textbox_email").type("test@gmail.com");
    cy.get("#textbox_password").type("Password123");
    cy.get('[type="submit"]').click();

    cy.get("#checkbox_accurate-info-check").click();
    cy.get('[type="submit"]').click();
    cy.get(".icon").should("exist");
    cy.get(".pageHeader > :nth-child(1)").should(
      "have.css",
      "background-color",
      "rgb(79, 169, 22)"
    );
    cy.get(".pageHeader > :nth-child(1)").should("have.text", "User");

    cy.get(".pageHeader > :nth-child(2)").should(
      "have.css",
      "background-color",
      "rgb(79, 169, 22)"
    );
    cy.get(".pageHeader > :nth-child(2)").should("have.text", "Privacy");
    cy.get(".selected").should("have.text", "Done");
  });
});

describe("Validates fields", () => {
  it("Can validate required textboxes", () => {
    cy.visit("/");

    cy.get('[type="submit"]').click();
    cy.get("input:invalid").should("have.length", 3);
    cy.get('[type="text"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it("Can validate required checkboxes", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get("#dropdown_role").select("Software engineer");
    cy.get("#textbox_email").type("test@gmail.com");
    cy.get("#textbox_password").type("Password123");
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').click();
    cy.get("#checkbox_accurate-info-check").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please check this box if you want to proceed."
      );
    });
  });

  it("Can validate required dropdown selector", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get('[type="submit"]').click();
    cy.get("select:invalid").should("have.length", 1);
    cy.get("#dropdown_role").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please select an item in the list."
      );
    });
  });

  it("Can validate email", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get("#dropdown_role").select("Software engineer");
    cy.get("#textbox_email").type("testgmail.com");
    cy.get('[type="submit"]').click();
    cy.get("#textbox_email").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please include an '@' in the email address. 'testgmail.com' is missing an '@'."
      );
    });
  });

  it("Can validate password", () => {
    cy.visit("/");
    cy.get("#textbox_name").type("test");
    cy.get("#dropdown_role").select("Software engineer");
    cy.get("#textbox_email").type("test@gmail.com");
    cy.get('[type="submit"]').click();
    cy.get("#textbox_password").type("password");
    cy.get("#textbox_password").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please match the requested format."
      );
      expect($input[0].title).to.eq(
        "Password must be atleast 10 characters. It must have atleast 1 number, 1 upper case and 1 lower case letter."
      );
    });
  });
});
