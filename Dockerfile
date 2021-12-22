FROM nginx
COPY dist/build-demo /usr/share/nginx/html

#   command to build (in project folder: npm run build-image)
#   ng b --configuration=production && docker image build --no-cache --tag ng-app-image .

#   command to run the container
#   docker container run --name ng-app-container --detach --publish 8080:80 ng-app-image
#   url: localhost:8080
