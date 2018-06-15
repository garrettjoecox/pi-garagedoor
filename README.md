# Installation

1. Install NodeJS (^8.0.0) on device (easiest way is [nvm](https://github.com/creationix/nvm))
1. Download repository to device.
1. Within repository run `npm install`
1. Start with `npm run start`

# Configuration
By default the configuration options are as follows:
```
{
  "port": 9000,
  "username": "admin",
  "password": "admin",
  "token": "super_secret_token_that_you_should_replace"
}
```
You can *and should* override these settings by creating a `.localrc` file with the format above.

# API Endpoints
| Method | Route | Action |
| - | - | - |
| POST | /api/left | Open left garage door |
| POST | /api/right | Open right garage door |

Both endpoints require you to provide the token in the query string as the `token` property. For example:
```
curl -X POST http://localhost:9000/api/left?token=token_goes_here
```
