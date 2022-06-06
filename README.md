# Library Management System
REST API for library management system built with Express, MongoDB and Pug.

## Organization

### The main entities/resources served by the API are
- Books
- Authors
- Book Instances
- Genres

### Each resource structured in 4 modules
- Router
- Model
- Controller
- View

## Accessing the API 
### Book routes
| Methods | Endpoints                          | Access  | Description                              |
| ------- | ---------------------------------- | ------- | ---------------------------------------- |
| GET     | /                                  | Public  | View all tasks                           |
| GET     | /book/:id/create                   | Public  | Create a task                            |
| POST    | /book/:id/create                   | Public  | View a task                              |
| GET     | /book/:id/delete                   | Public  | Update a task                            |
| POST    | /book/:id/delete                   | Public  | Delete a task                            |
| GET     | /book/:id/update                   | Public  | View all tasks                           |
| POST    | /book/:id/update                   | Public  | Create a task                            |
| GET     | /book/:id                          | Public  | View a task                              |
| GET     | /books                             | Public  | Update a task                            |

