# micro-flux

## vagrant
1. hub clone cores/cores-vagrant coreos
1. cd coreos
1. mv user-data.sample user-data
1. mv config.rb.sample config.rb
1. vim Vagrantfile
1. * $instance_name_prefix = "任意の名前"
1. * NFCの設定
1. * config.vm.network 80->8080, 443->3443, 3306->3306
1. vagrant up
1. vagnrat ssh

## docker
1. apache
```
docker run --net=host --name -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.21
```
1. exit

## app
1. touch index.html
1. package.json.sampleを利用するか、そのままリネームし使用する
1. package.jsonのscriptsよりビルド後の出力先のディレクトリを確認・作成
1. index.htmlへ 
* `<script src="js/build.js">`を追加
* `<div id="virtual-dom"></div>`を追加
1. npm install
1. npm run build

## 確認
1. http://localhost:8080/で確認
