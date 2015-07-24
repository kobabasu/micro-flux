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

## vagrant
1. `hub clone cores/cores-vagrant coreos`
1. `cd coreos`
1. 必要なファイルをリネーム  
   * `mv user-data.sample user-data`
   * `mv config.rb.sample config.rb`
1. Vagrantfile編集  
   `vim Vagrantfile`
   * `$instance_name_prefix = "任意の名前"`
   * NFSの設定
   * portの設定 80->8080
1. `vagrant up`

## docker
1. `vagnrat ssh`
1. apacheコンテナ起動
```
docker run --net=host --name -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.21
```
1. `exit`

## check
1. ブラウザで確認
1. http://localhost:8080/sample/ -> Homeと表示
1. http://localhost:8080/sample/counts -> ボタン表示
1. http://localhost:8080/sample/xxx -> No Matchと表示
