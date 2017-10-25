# moneyhack-backend

## Конфигурация Git

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Коммит файлов проекта

```
git add . // добавить все файлы проекта в будущий коммит
git commit -m "message"
```

## Отправка проекта в репозиторий на GitHub
```
git remote add origin git@github.com:divideby/moneyhack-backend.git
git push -u origin master
```

## Команды для создания и управления ветками
```
git branch // посмотреть все ветки проекта
git branch dt-contract-integration
git checkout dt-contract-integration
```

## Установка Express

```
npm install express --save
```