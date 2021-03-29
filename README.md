# Steps to reproduce

## 1. Setup environment

```
cd docker.mysql
docker build -t nest-tran-mysql .
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test nest-tran-mysql

cd ..
npm install
```

## 2. Run

```
npm run start:dev
```

## 3. Test

`GET /provided-repository` works well

---

`GET /custom-repository` error log
```
[Nest] 2016   - 03/30/2021, 5:39:57 AM   [ExceptionsHandler] Cannot read property 'find' of undefined +7600ms
TypeError: Cannot read property 'find' of undefined
    at CEntityRepository.Repository.find (/home/puroong/nest-tranact-with-custom-repository/node_modules/typeorm/repository/Repository.js:153:29)
    at CustomRepositoryService.find (/home/puroong/nest-tranact-with-custom-repository/dist/custom-repostiory/custom-repository.service.js:23:39)
    at /home/puroong/nest-tranact-with-custom-repository/dist/custom-repostiory/custom-repository.controller.js:23:85
    at EntityManager.<anonymous> (/home/puroong/nest-tranact-with-custom-repository/node_modules/typeorm/entity-manager/EntityManager.js:84:50)
    at step (/home/puroong/nest-tranact-with-custom-repository/node_modules/typeorm/node_modules/tslib/tslib.js:141:27)
    at Object.next (/home/puroong/nest-tranact-with-custom-repository/node_modules/typeorm/node_modules/tslib/tslib.js:122:57)
    at fulfilled (/home/puroong/nest-tranact-with-custom-repository/node_modules/typeorm/node_modules/tslib/tslib.js:112:62)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```