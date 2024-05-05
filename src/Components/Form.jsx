// FormComponent.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { v4 as uuid } from "uuid";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    provider: "",
    use_cases: "",
  });

  // New unique id
  const unique_id = uuid();

  // Get first 8 characters using slice
  const small_id = unique_id.slice(0, 8);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUseCasesChange = (event) => {
    const { value } = event.target;
    const useCasesArray = value.split("\n").map((useCase) => useCase.trim());
    setFormData({ ...formData, use_cases: useCasesArray });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mocki.io/v1/d4d07199-812f-4041-b214-8fe1a45e9e1e",
        formData,
        small_id
      );
      console.log("Data posted successfully:", response.data);
      // Reset form data after submission
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setFormData({
        name: "",
        category: "",
        description: "",
        provider: "",
        use_cases: [],
      });
    }
  };

  return (
    <div className="Form-main-container">
      <h3>Share Your LLM Model with Us!</h3>
      <h4 style={{fontFamily:"italic"}}>
        Do you know of any powerful language models that are not listed in our
        database? Help us expand our collection by submitting the details of the
        LLM model you're familiar with. Simply fill out the form below with as
        much information as you can provide. Thank you for your contribution!
      </h4>
      <div className="Form-container">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Provider"
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Use Cases"
            name="use_cases"
            value={formData.use_cases}
            onChange={handleUseCasesChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
