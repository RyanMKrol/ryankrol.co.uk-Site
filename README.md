# ryankrol.co.uk-Site

## Deployment

### Clone the repo

* SSH on to the box you want to run this on
* Run the following to grab the repo:
  * `git clone https://github.com/RyanMKrol/ryankrol.co.uk-API`

### Npm Install

* First step is nice and easy, run the following:
  * `npm install`

### Build the site artefacts

* We compile the site before serving it, so let's do that now:
  * `npm run build`

### Configure a daemon to run the site

* I usually use PM2 for this, so run the following
  * `npm install pm2@latest -g`
  * `pm2 start npm --name "ryankrol.co.uk-Site" -- start`
