
# CAR-AUCTION-APP

## Установка

`yarn install`

## Запуск отдельно api и web-server

`yarn dev:api` запуск локального сервера на localhost:3000

`yarn dev:web` запуск dev сервера webpack на localhost:8080

## Методы API

GET: `/api/filterAuctions?search=''` возвращает список аукционов, отфильтрованных по get-параметру `search`

GET: `/api/auction/:auctionId` возвращает информацию об отдельном аукционе, дополненную пробегом авто



