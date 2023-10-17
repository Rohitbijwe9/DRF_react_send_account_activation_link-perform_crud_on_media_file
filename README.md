# DRF_react_send_account_activation_link-perform_crud_on_media_file

# Media CRUD Web Application

A web application built with Django Rest Framework (DRF) for the backend and React for the frontend. This application allows users to create, read, update, and delete (CRUD) media files, as well as manage user accounts with email activation.

## Features

- User Registration: Users can sign up for an account, and an activation link is sent to their email.
- User Activation: Users must click the activation link to activate their accounts.
- User Login and Logout: Authenticated users can log in and out.
- Media File Management: Users can upload, view, update, and delete media files.

## Technologies Used

- Django Rest Framework (DRF) for the backend
- React for the frontend
- django-allauth for user account management
- djangorestframework-simplejwt for JWT-based authentication

## Installation

### Backend Setup (Django/DRF)

1. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
