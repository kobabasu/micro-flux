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
1. touch .bowerrc bower.json package.json, index.html
1. .bowerrc
* ./vendorで設定
1. package.json
* jquery, react, flux, object-assignを追記
* (broweserにjquery, reactのパスを書き込む) 書き込まなくてもよい
1. npm install

## compile
1. hub clone kobabasu/micro-flux src
1. babel -d app/js babel/
1. browserify js/app.js t babelify --compact false -o js/build.js
1. index.htmlへ 
* `<script src="js/build.js">`を追加
* `<div id="virtual-dom"></div>`を追加

## 確認
1. http://localhost:8080/で確認
