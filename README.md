# micro-flux

```
hub clone kobabasu/micro-flux src
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.jsonを確認  
1. `npm install`
1. `npm run build:sample`

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
docker run --net=host --name apache -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.21
```
1. `exit`

## check
1. ブラウザで確認
1. http://localhost:8080/src/sample/ -> Frontと表示
1. http://localhost:8080/src/sample/sample -> sampleと表示
1. http://localhost:8080/src/sample/admin -> Adminと表示
1. http://localhost:8080/src/sample/count -> ボタン表示

## path
( sample/.htaccessをappのrootに移動
* .htaccess内のパスを変更
* sample/index.htmlもしくは作成したindex.htmlのbuild.jsと`<base href="" />`の値を確認

## project
* sample/.htaccessの移動
* package.jsonの編集
* js,dist,docsディレクトリの作成
* src/Routes.jsx, src/layouts{admin/header.jsx,front/header.jsx}の編集
