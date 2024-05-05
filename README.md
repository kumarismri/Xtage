LLM Models Database:
This repository contains a web application for managing and exploring Language Model (LLM) models. Users can view details of various models, contribute new models, and explore popular models.

Features:
Model Listing: View a list of available LLM models.
Model Details: Click on a model to view its details, including description, provider, use cases, and more.
Contribute: Submit details of new LLM models using the provided form.

Technologies Used:
React
Material-UI
React Router
Axios

Usage:
Navigate to the homepage to view a list of available models.
Click on a model to view its details.
Use the form to contribute details of new LLM models.

Mock API for LLM Models Database:
This repository contains a Mock API created using the Mocki API editor. The API serves as a backend for the Language Model (LLM) Models Database web application, providing mock data for demonstration purposes.

API URL: https://mocki.io/v1/d4d07199-812f-4041-b214-8fe1a45e9e1e
Data Structure: The API provides an array of LLM models, each containing properties such as name, category, description, provider, and use cases.
Endpoints:
GET /: Retrieves a list of available LLM models.
GET /:id: Retrieves details of a specific LLM model by ID.

Usage:
Fetching Data: Use the GET / endpoint to fetch a list of available LLM models.
View Model Details: Use the GET /:id endpoint to retrieve details of a specific LLM model by its ID.
Contribute: Use the POST / endpoint to submit details of new LLM models.

Acknowledgements:
Special thanks to Mocki for providing an easy-to-use Mock API editor for creating mock APIs

Contributing:
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Create a new Pull Request.