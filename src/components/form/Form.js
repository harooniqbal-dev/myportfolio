import React, { useState } from "react";
import "./Form.css";
import { services, budget } from "../../utils";
import { db } from "../../firebase";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
export const MyOption = ({ value, text }) => {
  return <option value={value}>{text}</option>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
      // marginRight:'10px',
    },
  },
}));

const Form = ({ projectform }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("Invalid Form");
  const [errorType, setErrorType] = useState('error');
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    budget: "",
    service: "",
  });



  const handlesubmit = (e) => {
    e.preventDefault();
    if (projectform) {
      if (
        input.email &&
        input.budget &&
        input.company &&
        input.message &&
        input.name &&
        input.service
      ) {
        db.collection("projects").add({
          email: input.email,
          budget: input.budget,
          company: input.company,
          message: input.message,
          name: input.name,
          service: input.service,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setError("Thanks for request");
        setErrorType("success");
        setOpen(true);

        
      } else {
        setError("Invalid Form");
        setErrorType("error");
        setOpen(true);
      }
    } else {
      if (input.email && input.message && input.subject && input.name) {
        db.collection("contacts").add({
          email: input.email,
          message: input.message,
          name: input.name,
          subject: input.subject,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),  
        });

        setError("Thanks for contact");
        setErrorType("success");
        setOpen(true);
      } else {
        setError("Invalid Form");
        setErrorType("error");
        setOpen(true);
      }
    }
    setInput({
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
      budget: "",
      service: "",
    });
  };


  return (
    <div className="form">
      <Collapse in={open}>
        <Alert
          style={{ marginRight: "15px" }}
          severity={errorType}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error}
        </Alert>
      </Collapse>

      <div className="form__inline">
        <div className="form__inline1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="form__inline1">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>
      </div>
      <div className="form__inline2">
        <input
          type="text"
          name={projectform ? "company" : "subject"}
          placeholder={projectform ? "Company" : "subject"}
          value={projectform ? input.company : input.subject}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
      </div>
      {projectform && (
        <>
          <div className="form__inline">
            <div className="form__inline1">
              <select
                name="service"
                className="form__inline__select"
                value={input.service}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              >
                <MyOption value={null} text="Select Service" />
                {services.map((service) => {
                  return (
                    <option key={service.id} value={service.service}>
                      {service.service}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form__inline1">
              <select
                name="budget"
                className="form__inline__select"
                value={input.budget}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              >
                <MyOption value={null} text="Select Budget" />
                {budget.map((bug) => {
                  return (
                    <option key={bug.id} value={bug.value}>
                      {bug.budget}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </>
      )}
      <div className="form__inline2">
        <textarea
          placeholder="Message"
          style={{ width: "100%" }}
          cols="30"
          rows="3"
          name="message"
          value={input.message}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        ></textarea>
      </div>
      <button onClick={handlesubmit} className="form__btn">
        Send
      </button>
    </div>
  );
};

export default Form;
