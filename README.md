# micro-flux

```
hub clone kobabasu/micro-flux app
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.json.sampleを確認。流用する場合はリネーム  
   `mv package.json.sample package.json`
1. `npm install`
1. `npm run build`

## check
1. ブラウザで確認
1. http://localhost:8080/sample/ -> Homeと表示
1. http://localhost:8080/sample/counts -> ボタン表示
1. http://localhost:8080/sample/xxx -> No Matchと表示
