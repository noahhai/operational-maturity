# Scorecard for Operational Maturity using [SurveyJS](https://surveyjs.io/Overview/Library/)

Based on [SurveyJS React QuickStart](https://github.com/surveyjs/surveyjs_react_quickstart.git)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Local Development

- git clone git@github.com:noahhai/operational-maturity.git
- cd operational-maturity
- yarn install
- yarn start
- open http://localhost:3000/ in your web browser

## Deployment - S3 Static Site

- yarn build
- create S3 bucket BUCKET_NAME with allow public access
- enable static site hosting and note STATIC_SITE_URL
- (cd build && aws s3 sync . s3://BUCKET_NAME)
- open STATIC_SITE_URL
- optionally - for SSL, create a cloudfront distribution and a route53 rule to map a custom domain to site
