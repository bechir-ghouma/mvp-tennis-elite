DROP DATABASE IF EXISTS tennis ;

CREATE DATABASE tennis ;

USE tennis ;

CREATE TABLE wilson (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(400) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE nike (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE head (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE babolat (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE diadora (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE rackets (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(500) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE shoes (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE bags (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE backpack (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE clothes (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(300) ,
  model varchar(50) NOT NULL ,
  price varchar(10) NOT NULL ,
  PRIMARY KEY (ID)
);


INSERT INTO wilson (url,model,price) VALUES ('https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/e/d/edac749671d95f2f6d7a029af28b1fe442613260_WR043711U_1_Pro_Staff_RF97_V13_BL_RD_YE.jpg','wilson racket','255$');
INSERT INTO wilson (url,model,price) VALUES ('https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000207046788_01_ks.jpg','wilson shoes','105$');
INSERT INTO wilson (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/241500238_1.jpg','wilson bag','145$');
INSERT INTO wilson (url,model,price) VALUES ('https://www.midwestsports.com/images/xxl/WRAX032WHA.JPG','wilson t-shirt','40$');
INSERT INTO wilson (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/w/r/wr005611u_1_9.jpg','wilson racket','250$');
INSERT INTO wilson (url,model,price) VALUES ('https://i5.walmartimages.com/asr/ff9c1445-f2c9-4d59-805e-1338f1f01e62.a141573e6b249eb528cfa09771d9015a.jpeg','wilson balls','9$');

INSERT INTO nike (url,model,price) VALUES ('https://www.midwestsports.com/images/l/DC3431-524.jpg?v=101774252193-1','tennis shoes for women' , '110$');
INSERT INTO nike (url,model,price) VALUES ('https://www.tennis-point.fr/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbcefc727/images/004/455/53289000_000.jpg?q=80&sw=2000','Rafael Nadal t-shirt','40$');
INSERT INTO nike (url,model,price) VALUES ('https://img.tennis-warehouse.com/watermark/rs.php?path=NISURAS-NV-1.jpg&nw=600', 'Rafael Nadal shorts','35$');
INSERT INTO nike (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/n/i/nikecourt-slam-women-s-tennis-dress-black-white.jpeg','womens tennis dress','89.5$');
INSERT INTO nike (url,model,price) VALUES ('https://clothbase.s3.amazonaws.com/uploads/0252cf85-5828-4ee4-82b1-f5f62b25663f/image.jpg','nike tennis socks','3.5$');
INSERT INTO nike (url,model,price) VALUES ('https://dtpmhvbsmffsz.cloudfront.net/posts/2017/10/25/59f0c4ef78b31c373e01602c/m_59f0c4ff2ba50a48cd01602d.jpg','nike Match Pleats Skirt Women ','29$');

INSERT INTO head (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/2/3/232009-head-mx-attitude-tour-tennis-racquet-yellow.jpg','head racket','160$');
INSERT INTO head (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/800x800/9df78eab33525d08d6e5fb8d27136e95/2/8/x283110-orgr-head_radical_rebel_tennis_backpack_2020_.jpg.pagespeed.ic.JB2dwOYOQc.jpg','head backpack','90$');
INSERT INTO head (url,model,price) VALUES ('https://m.media-amazon.com/images/I/713AhFcWUWL._SL1300_.jpg','head shoes','94$');
INSERT INTO head (url,model,price) VALUES ('https://images-na.ssl-images-amazon.com/images/I/61NpjHLlPWS._AC_SX425_.jpg','head grip','3$');
INSERT INTO head (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/1F/83/1F83F0F9F8981274DBC87C01CF36EC6EFFd0.1000x1000.jpeg','head bag','100$');
INSERT INTO head (url,model,price) VALUES ('https://cdn-mdb.head.com/CDN3/G/811489_DB/1/400x400/club-carl-t-shirt-men-dark-blue.jpg','head t-shirt','25$');

INSERT INTO diadora (url,model,price) VALUES ('https://www.diadora.com/on/demandware.static/-/Sites-diadora-master/default/dw679c3ada/images/medium/102.175658_45082_01_M.jpg','diadora tank top for women','60$');
INSERT INTO diadora (url,model,price) VALUES ('https://shop.r10s.jp/esportskenko/cabinet/9706-3/9706030090846.jpg','diadora bag','79$');
INSERT INTO diadora (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/BE/FA/BEFAD2707A6BB803D5FA85172F7D1193EDd0.1000x1000.jpeg','diadora shoes','100$');
INSERT INTO diadora (url,model,price) VALUES ('https://www.diadora.com/on/demandware.static/-/Sites-diadora-master/default/dw29a7d3ca/images/medium/102.172465_60024_01_M.jpg','diadora shorts','30$');
INSERT INTO diadora (url,model,price) VALUES ('https://www.sportinghousedirect.com.au/assets/full/DIASPDPRO2.jpg?20210309031220','diadora racket','110$');

INSERT INTO babolat (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/240300170_1_1.jpg','babolat bag','130$');
INSERT INTO babolat (url,model,price) VALUES ('https://img.tennis-warehouse.com/watermark/rs.php?path=BPARR-1.jpg&nw=700','Rafael Nadal racket','200$');
INSERT INTO babolat (url,model,price) VALUES ('https://www.directtennis.co.uk/images/medium/Bab_3MS18061-4000.jpg','babolat shorts','30$');
INSERT INTO babolat (url,model,price) VALUES ('https://www.rackets.ie/wp-content/uploads/2020/05/red-1-600x600.jpg','babolat pleats skirt for women','60$');
INSERT INTO babolat (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/7/5/753074-191-babolat-pure-aero-tennis-backpack-2019-yellow-black.jpg','babolat backpack','75$');
INSERT INTO babolat (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=BPSTRI-1.jpg&nw=700','babolat racket','189$');
 
INSERT INTO shoes (url,model,price) VALUES ('https://lh3.googleusercontent.com/proxy/JHxtcmkVk2c189QKODfy13d7bvnI452YhKkBzPtBK0HKBdrr8GDbTsBHTC91iYt3lEWm09wGpOQSK5rVQWl1fa4KMpoLHOZ91qbtT0bdfP-WLS75-CDfW9aQS4GwLpy1ZXgBZc8jDYsJ2d9evscc9s47jEY-Esz7URoU2hAq-J_Qt38I-Mn8qFhdf316C5a6j4v3','nike shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://images.asics.com/is/image/asics/E751Y_0193_SR_RT_GLB?$sfcc-product$','asics shoes','102$');
INSERT INTO shoes (url,model,price) VALUES ('https://assets.adidas.com/images/w_600,f_auto,q_auto/bca62e725b8b49fdb578ac3800f1fed0_9366/GameCourt_Tennis_Shoes_White_FX1552_01_standard.jpg','adidas shoes','125$');
INSERT INTO shoes (url,model,price) VALUES ('https://cdn.shopify.com/s/files/1/0291/6961/4901/products/38sma0072-042_blanc_1_13_1200x1200.jpg?v=1595374668','lacoste shoes','100$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.midwestsports.com/images/l/CD0431-400.jpg?v=101774214649-2','nike shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.e-tennis.gr/media/catalog/product/cache/8/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/r/wrs326570-wilson_kaos_comp_2.0_clay_men_s_tennis_shoes.jpg','wilson shoes','90$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennis-point.com/images/l/1041A079-403.jpg?v=101774218296-2','asics shoes','99$');
INSERT INTO shoes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/55/B5/55B56E3B9D5C9B917F353416392C4AE356d0.1000x1000.jpg','lacoste shoes','105$');
INSERT INTO shoes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/EE/61/EE61B8E405393A43472F9C5B7D34E65AEBb0.600x600.jpeg','nike shoes','130$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennis-point.com/images/l/FX1365.jpg?v=101774216450-2','adidas shoes','140$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.midwestsports.com/images/l/1041A089-104.jpg?v=101774218443-2','asics shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/E8/D0/E8D02D2F0594A6C627A6112FEF91F38682b0.600x600.jpeg','wilson shoes','100$');
INSERT INTO shoes (url,model,price) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/626b717eb8a448059697ac3800ab9a16_9366/Male_Multi-court_Tennis_Shoes_White_FZ3650_01_standard.jpg','adidas shoes','140$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/3/8/38sma0072-082_blanc_1_13.jpg','lacoste shoes','102$');
INSERT INTO shoes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/D2/84/D2849942EDA4E1BB3662C87FDEC9672629d0.1000x1000.jpeg','nike shoes','129$');
INSERT INTO shoes (url,model,price) VALUES ('https://images.asics.com/is/image/asics/1041A089_401_SR_RT_GLB?$sfcc-product$','asics shoes','105$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/f/x/fx1806_adidas-adizero-ubersonic-2-tokyo-men-s-tennis-shoes-signal-pink-core-black-copper-metallic.jpg','adidas shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://cdn.shoplightspeed.com/shops/607570/files/14544504/800x600x2/adidas-womens-gamecourt-tennis-shoes-white-blue-ti.jpg','adidas grass shoes','124$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennis-point.com/images/l/STE2RBK.jpg?v=101773934955-1','yonex shoes','97$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/1044a018-402_asics-gel-resolution-8-junior-tennis-shoes-gs-mako-blue-pure-silver.jpg','asics shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/0/6/06988-191_blanc_1_9.jpg','kwiss shoes','100$');
INSERT INTO shoes (url,model,price) VALUES ('https://images.asics.com/is/image/asics/E751Y_0193_SR_RT_GLB?$sfcc-product$','asics grass shoes','119$');
INSERT INTO shoes (url,model,price) VALUES ('https://assets.adidas.com/images/w_600,f_auto,q_auto/9a167e562ecb4d17b075ac3700caba45_9366/SoleCourt_Primeblue_Tennis_Shoes_White_FX1729_01_standard.jpg','adidas shoes','130$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/w/r/wrs324950_wilson-kaos-2-0-junior-tennis-shoes-black-green.jpg','wilson shoes','100$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennisplaza.com/prodimages/23753-DEFAULT-m.jpg','asics shoes for women','112$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennis-point.com/images/l/CV0724-324.jpg?v=101774262911-1','nike shoes','120$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennis-point.com/images/l/STE2WN.jpg?v=101773935009-1','yonex shoes','102$');
INSERT INTO shoes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/FB/06/FB06D9E455F70DADA31DF0D3105BBE41BDd0.1000x1000.jpeg','asics shoes','99$'); 
INSERT INTO shoes (url,model,price) VALUES ('https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/00d7df2db1084d458b28aca100b30d69_9366/Adizero_Ubersonic_4_Parley_Hard_Court_Tennis_Shoes_White_G58794_01_standard.jpg','adidas shoes','125$');
INSERT INTO shoes (url,model,price) VALUES ('https://mk0racquetdepotlh1uc.kinstacdn.com/wp-content/uploads/2020/03/wilson_rush_pro_3_AC_men_wht_shockingorange_2020_WRS326870_outside.jpg','wilson shoes','105$');
INSERT INTO shoes (url,model,price) VALUES ('https://images.asics.com/is/image/asics/1041A182_800_SR_RT_GLB?$sfcc-product$','asics shoes','109$');
INSERT INTO shoes (url,model,price) VALUES ('https://tennis-buzz.com/wp-content/uploads/2018/06/nadal_nikeshoes2_rg2018.jpg','nike shoes','110$');
INSERT INTO shoes (url,model,price) VALUES ('https://global.tennis-point.com/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf499504e/images/019/150/01335000_0_1.jpg?q=80&sw=2000','yonex shoes','115$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tenniswarehouse.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/r/wrs326920_0_rush_pro_3_t_1_.1601986058.jpg','wilson shoes','89$');
INSERT INTO shoes (url,model,price) VALUES ('https://images.asics.com/is/image/asics/1041A079_401_SR_RT_GLB?$sfcc-product$','asics shoes','100$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.gamma-europe.com/media/image/product/2083/lg/k-swiss-tennis-shoe-aero-court-hb-white-black-men_7.jpg','kwiss shoes','111$');
INSERT INTO shoes (url,model,price) VALUES ('https://www.tennisforlife.co.za/wp-content/uploads/2020/05/Womens-alaskan-blue.jpg','wilson shoes for women','102$');


INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/240300225_2_1.jpg','babolat bag','90$');
INSERT INTO bags (url,model,price) VALUES ('https://global.tennis-point.com/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f74d131/images/007/343/0208200000_0_2.jpg?q=80&sw=2000','wilson bag','100$');
INSERT INTO bags (url,model,price) VALUES ('https://cdn.shopify.com/s/files/1/0952/5022/products/92029_pro_9_Black_1024x1024.jpg?v=1576851805','yonex bag','85$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennisnuts.com/images/product/full/40ATPEN15RR_atp-endurance-15r-bag.jpg','technifibre bag','90$');
INSERT INTO bags (url,model,price) VALUES ('https://thetennisshoponline.com/wp-content/uploads/2017/11/head-283368-2-website.jpg','head bag','93$');
INSERT INTO bags (url,model,price) VALUES ('https://www.e-tennis.gr/media/catalog/product/cache/8/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/r/wrz840803_super_tour_2_comp_small_infrared_a1_1.jpg','wilson bag','120$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/240300170_1_1.jpg','babolat bag','109$');
INSERT INTO bags (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=SI20290-1.jpg&nw=600','yonex bag','100$');
INSERT INTO bags (url,model,price) VALUES ('https://www.squashsource.com/wp-content/uploads/2015/10/Tecnifibre-Air-Endurance-12-Racket-Bag-1.jpg','technifibre bag','75$');
INSERT INTO bags (url,model,price) VALUES ('https://images-na.ssl-images-amazon.com/images/I/61w6QPRHInL._AC_SX425_.jpg','prince bag','80$');
INSERT INTO bags (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/w/i/wilson_roland_garros_tour_12-pack_tennis_bags-wr8006501.jpg','wilson Roland Garros tennis bag','140$');
INSERT INTO bags (url,model,price) VALUES ('https://thetennisshoponline.com/wp-content/uploads/2017/11/head-283308-2-web.jpg','head bag','98$');
INSERT INTO bags (url,model,price) VALUES ('https://www.perfect-tennis.com/wp-content/uploads/2021/01/yonex-12-pack-bag.jpg','yonex Wimbledon bag','110$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/240300243_1_2.jpg','babolat Rafa bag','120$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennis-point.co.uk/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf28c2356/images/006/341/0210600000_0_2.jpg?q=80&sw=2000','head bag for women','100$');
INSERT INTO bags (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=TTE15RB-1.jpg&nw=600','technifibre bag','109$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/241500213_1_1.jpg','wilson bag','130$');
INSERT INTO bags (url,model,price) VALUES ('https://img.tennis-warehouse.com/watermark/rs.php?path=BL20260-1.jpg&nw=600','yonex bag','99$');
INSERT INTO bags (url,model,price) VALUES ('https://images-na.ssl-images-amazon.com/images/I/91VmIuFJNRL._AC_UL1500_.jpg','head bag','90$');
INSERT INTO bags (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/6/p/6p873175-prince-bryan-brothers-gold-edition-12-pack-bag-gold-white.jpg','prince Wimbledon bag','100$');
INSERT INTO bags (url,model,price) VALUES ('https://i5.walmartimages.com/asr/3995a5a8-c1f1-4821-9419-17c63b08dcdd_1.b4750c797935047025a33e6356bb88ef.jpeg','wilson team bag','120$');
INSERT INTO bags (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/7/5/751195-316_babolat-pure-wimbledon-x-12-tennis-bag-white-gold.jpg','babolat Wimbledon bag','125$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/240700422_1_1.jpg','head bag','105$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.it/media/catalog/product/cache/6/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/241600080_1.jpg','yonex bag','110$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/241500166_1.jpg','wilson bag','115$');
INSERT INTO bags (url,model,price) VALUES ('https://tennisdiva619.files.wordpress.com/2011/06/head-djokovic-monstercombi-ten.jpg','head Wimbledon bag','112$');
INSERT INTO bags (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/t/e/tecnifibre_tour_endurance_12_pack_tennis_bag_2019-40tou12rwh.jpg','technifibre bag','119$');
INSERT INTO bags (url,model,price) VALUES ('https://shop.wilson.com/en-gb/media/catalog/product/cache/146/image/9df78eab33525d08d6e5fb8d27136e95/6/b/6bb5f5142182e2c80bf63911747f5b1e593b7595_WR8010601_1_SUPER_TOUR_PRO_STAFF_9PK_BL.jpg','wilson bag','110$');
INSERT INTO bags (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/0C/AA/0CAA0E55AE7CA42E90B8E4FCE322E743C0b0.600x600.jpeg','babolat bag','120$');
INSERT INTO bags (url,model,price) VALUES ('https://www.tennisplaza.com/prodimages/29475-DEFAULT-l.jpg','wilson bag','135$');

INSERT INTO backpack (url,model,price) VALUES ('https://fft-fft-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/86f6552cbdc939be5850cd6245f33d7f51bfc0e7_WSRU0520_MAR_1.jpeg','wilson Roland Garros backpack','65$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.tennisexpress.com/prodimages/93297-DEFAULT-l.jpg','head backpack','50$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/7/5/753079.jpg','babolat Wimbledon backpack ', '60$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/2/8/283170-nvbl-head_tour_team_tennis_backpack_2020_.jpg','head backpack','45$');
INSERT INTO backpack (url,model,price) VALUES ('https://i.sportisimo.com/products/images/992/992413/450x450/wilson-tour-backpack_0.jpg','wilson backpack','60$');
INSERT INTO backpack (url,model,price) VALUES ('https://cdn.hydrogen.filoblu.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/h/y/hypr04-e37-3-35_2.jpg','prince backpack','50$');
INSERT INTO backpack (url,model,price) VALUES ('https://wpsports.co.uk/wp-content/uploads/2020/04/Babolat-Pure-Aero-Tennis-Backpack.jpg','babolat bagpack','55$');
INSERT INTO backpack (url,model,price) VALUES ('https://global.tennis-point.com/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw30fd9cb2/images/007/350/0217500000_000.jpg?q=80&sw=2000','wilson backpack','65$');
INSERT INTO backpack (url,model,price) VALUES ('https://cdn11.bigcommerce.com/s-wkjtr/images/stencil/1280x1280/products/1054/1620/218053_Main_Thumb_0642562__21757.1603897042.jpg?c=2','wilson backpack for women ','50$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.tennisnuts.com/images/product/full/283339_Rebel_Backpack_.jpg','head backpack','42$');
INSERT INTO backpack (url,model,price) VALUES ('https://ae01.alicdn.com/kf/H1cfd2320ed934fb6b729f546c26f0770w/Original-Yonex-Badminton-Racket-Bag-2020-Sport-Backpack-Ba12mltdex.jpg_Q90.jpg_.webp','yonex Wimbledon backpack','59$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.tennisexpress.com/prodimages/alt_images/B753064-105-01.jpg','babolat backpack','53$');
INSERT INTO backpack (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=WBMTBP-1.jpg&nw=600','wilson designed backpack','69$');
INSERT INTO backpack (url,model,price) VALUES ('https://tennismag.com.ua/upload/iblock/1c5/1c52e8ee88bdcc0fa2cc24fc56f0cd17.jpg','head backpack','54$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/i/wilson_roland_garros_clay_tour_tennis_backpack_2020_-wr8006602-1.jpg','wilson Roland Garros backpack','70$');
INSERT INTO backpack (url,model,price) VALUES ('https://badminton-shop.com/images/Yonex%20Active%20Backpack%20S%2082012SEX%20Badminton-p.jpg','yonex backpack','45$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.padelnuestro.com/images/products/Backpack-pure-aero-negro-amarillo-1.jpg','babolat backpack','53$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.prodirecttennis.com/productimages/Main/218106_Main_Thumb_0654249.jpg','head backpack','48$');
INSERT INTO backpack (url,model,price) VALUES ('https://images-na.ssl-images-amazon.com/images/I/810rc8ZPRqL._AC_SL1500_.jpg','wilson backpack','59$');
INSERT INTO backpack (url,model,price) VALUES ('https://img.tennis-warehouse.com/watermark/rs.php?path=TBTRBP-1.jpg&nw=600','technifibre backpack','55$');
INSERT INTO backpack (url,model,price) VALUES ('https://fft-fft-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c193c23f34352e5e2970437e5ba49361ffcc0a3a_BSRU0818_BLC.jpg','babolat backpack','59$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/2/4/241500287_1.jpg','wilson backpack','62$');
INSERT INTO backpack (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=BBPCGY-1.jpg&nw=600','babolat backpack','58$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.tennisexpress.com/prodimages/95793-DEFAULT-l.jpg','head backpack','48$');
INSERT INTO backpack (url,model,price) VALUES ('https://img.tennis-warehouse.com/watermark/rs.php?path=WSTBPBA-1.jpg&nw=600','wilson backpack','55$');
INSERT INTO backpack (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/720x/9df78eab33525d08d6e5fb8d27136e95/w/r/wr8001601_wilson-super-tour-bold-backpack-black-white.jpg','wilson designed backpack','65$');

INSERT INTO rackets (url,model,price) VALUES ('https://www.tennisdirect.com.au/assets/full/R09010.png?20210309032232','wilson clash racket','240$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/101354-babolat-pure-aero-tennis-racquet-2019-black-yellow_4.jpg','babolat pure aero racket','210$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/2/3/232149-head-tour-pro-2019-tennis-racquet.jpg','head tour pro racket','190$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/w/r/wr036511u_1_11.jpg','wilson ultra racket','250$');
INSERT INTO rackets (url,model,price) VALUES ('https://cdnmedia.racquets4u.com/media/catalog/product/cache/2a6b0744b87cbe1990f7a65c1fd3659e/d/u/dunlop-elite-260-tennis-racquet.jpg','dunlop cx elite 260 racket','175$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/101455_1_17.jpg','babolat pure aero rafa racket','230$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/w/r/wr013621u_1_4.jpg','wilson blade','250$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.mistertennis.com/images/2018-media/Yonex-RACCHETTA-VCOREPRO-97H-330g-RACCHETTA-DA-TENNIS-MATT-GREEN-G2-02VCP97H-A.jpg','yonex Vcore pro','200$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/4/14fi305r1_1_8.jpg','technifibre tfight 305 rs','190$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/3/130ez98lblue-28_1_3.jpg','yonex ezone 98 blue','210$');
INSERT INTO rackets (url,model,price) VALUES ('https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/a/b/ab15e10ec17a5b25587ea332df199c5ceb6f3c15_WRT74181U_Pro_Staff_97CV_BL_WH_Side.jpg','wilson pro staff racket','250$');
INSERT INTO rackets (url,model,price) VALUES ('https://img.tenniswarehouse-europe.com/watermark/rs.php?path=WRMU-1.jpg&nw=700','wilson minions 103 racket','260$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/2/3/234040_head-graphene-360-speed-lite-tennis-racquet.jpg','head graphene 360+ speed lite','200$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.racquetdepot.com/wp-content/uploads/2017/08/babolat_pure_drive_100_2017_102334.jpg','babolat pure drive 100','210$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennisdirect.com.au/assets/full/7T53G.jpg?20210309033937','prince shark elite','160$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.bellracquetsports.com/wp-content/uploads/2017/01/121210.jpg','babolat boost strike racket' ,'210$');INSERT INTO rackets (url,model,price) VALUES ('https://cdn.shopify.com/s/files/1/1330/6287/products/tr_20990_20pro_20_7C_20001_20_7C_20PSHOT_20_675x.progressive.jpg?v=1621426136','artengo tr990 racket','140$');
INSERT INTO rackets (url,model,price) VALUES ('https://themarket.azureedge.net/resizer/view?b=productimages&key=bfe2f403dcdef23b97382c9bc582f0b9&w=632&h=632','head IG challenge ','190$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.pdhsports.com/imgs/products/uk/950_constW/RTDU14282~cx400_P1.jpg','dunlop srixon cx 400 racket','170$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.smashinn.com/f/13775/137758244/wilson-pro-staff-97-v13-tennis-racket.jpg','wilson pro staff Roger Federer Racket','250$');
INSERT INTO rackets (url,model,price) VALUES ('https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/8/c89c05b7fcd5c2b6542137485aca84dd74ce1f89_WR000210U_Burn_100LS_Black_Orange_Side.jpg','wilson burn racket','160$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/101414_1_5.jpg','babolat strike evo racket','210$');INSERT INTO rackets (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/1/0/101354-babolat-pure-aero-tennis-racquet-2019-black-yellow_4.jpg','babolat pure aero racket','220$');
INSERT INTO rackets (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/10295928_1_3.jpg','dunlop srixon 600 racket','170$');
INSERT INTO rackets (url,model,price) VALUES ('https://lh3.googleusercontent.com/proxy/VbZ9EfBTTHRRPSYfuB_FvX2LOPULBtRallQXyjPUml6aFEbh5AfUOzzRB0fX_uMwEU8XFDBsmZUzHvcaBK1AevA44IEcN_hXJEx67YvBKbaSTJvWNvfmepYNJ91OdBn-6XtiNvESOBTp5xeNoShBScgQQabcOGPdkbvzvfD7emoreuzGl0s1juDB_FUS_P18Y1C5Z_WBNAZPsTNMylCu1yHwfrVWC3QwemcYDVlmvrpKeXiBdLx8Tt-AXAroaEOO5g4cUwJPGBSwtrHCYiEF8Ok','head graphene 360 extreme racket' , '180$');

INSERT INTO clothes (url,model,price) VALUES ('https://media.damesschoenen.nl/images/tennis-point/nike-court-jurk-dames-125773.jpg','nike dri-fit','50$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.badminton-point.com/media/catalog/product/cache/3/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/j/cj0429-010_1.jpg','nike t-shirt','29$');
INSERT INTO clothes (url,model,price) VALUES ('https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw77b3d84d/GJ8636_001_24.jpg','lacost shorts for men','33$');
INSERT INTO clothes (url,model,price) VALUES ('https://images.squarespace-cdn.com/content/575e967a86db43d483836db1/1580318696129-EMQMS64CC3W00XU25882/FS9251_APP_photo_front-center_transparent.png?format=1500w&content-type=image%2Fpng','adidas Dominic Thiem t-shirt','35$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/c/i/ci9148-451_marine_1_6.jpg','nike rafa t-shirt','34$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.tennisexpress.com/prodimages/96721-DEFAULT-m.jpg','lacoste t-shirts for men','25$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.mistertennis.com/images/2020_12-media/adidas-club-stretch-woven-7in-pantaloncini-tennis-uomo-black-gl5409_A.jpg','adidas shorts','29$');
INSERT INTO clothes (url,model,price) VALUES ('https://global.tennis-point.com/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7b84e8f1/images/005/454/14491000_000.jpg?q=80&sw=260','adidas dri-fit ' , '49$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.directtennis.co.uk/images/medium/Und_1350196-001.jpg','under armour shorts for women ' ,'28$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.tennispro.eu/media/catalog/product/cache/5/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/c/i/ci9152-445_bleu_1_6.jpg','nike rafa t-shirt','35$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.e-tennis.com/media/catalog/product/cache/1/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/d/m/dm7595_blanc_1.jpg','adidas t-shirt','30$');
INSERT INTO clothes (url,model,price) VALUES ('https://assets.adidas.com/images/w_600,f_auto,q_auto/7641525e40b84d628b7baace00b37a9a_9366/Tennis_Y-Dress_Black_FK0558_21_model.jpg','adidas dri-fit','45$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.mistertennis.com/images/2021-media/adidas-ergo-7in-pantaloncini-da-tennis-uomo-semi-nigh-flash-gh7692_A.jpg','adidas shorts formen','35$');
INSERT INTO clothes (url,model,price) VALUES ('https://paragon-weblinc.netdna-ssl.com/product_images/flex-ace-short-2/WHITEBLACK/5c6dc9077061727a7e002491/pdp_main.jpg?c=1550698759','nike shorts','30$'); 
INSERT INTO clothes (url,model,price) VALUES ('https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/49ee3dbe-569f-430e-b70e-8a1f737104ce/nikecourt-dri-fit-victory-womens-tennis-shorts-96dS1R.png','nike shorts for women','34$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.e-tennis.gr/media/catalog/product/cache/8/image/720x/9df78eab33525d08d6e5fb8d27136e95/1/3/1302229-918-under-armour-center-court-women-s-tennis-skirt-true-ink.jpg','under armour dri-fit shorts for women','35$');
INSERT INTO clothes (url,model,price) VALUES ('https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwc2e02502/GF9500_J72_24.jpg?imwidth=915&impolicy=product','lacoste shorts for women','28$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.e-tennis.gr/media/catalog/product/cache/8/thumbnail/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-escouade-women-s-tennis-dress-black-white-model.jpg','adidas dri-fit' ,'60$');
INSERT INTO clothes (url,model,price) VALUES ('https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/97d99ee6-190e-4728-9799-446baaa7f0e5/nikecourt-dri-fit-rafa-tennis-shorts-rNM4PX.png','nike rafa shorts','35$');
INSERT INTO clothes (url,model,price) VALUES ('https://i.pinimg.com/originals/13/cc/4e/13cc4ead80d2fd7350d130c083ce661b.jpg','lacoste dri-fit','55$');
INSERT INTO clothes (url,model,price) VALUES ('https://image.keller-sports.com/storage/products/A4/4D/A44D24F1955027E40C4DC52084FADF3A42d0.1000x1000.jpeg','under armour shorts for men','34$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.extreme-tennis.fr/18678-medium_default/t-shirt-adidas-junior-tennis-graphic-logo-white-australian-open-2021.jpg','adidas t-shirt','29$');
INSERT INTO clothes (url,model,price) VALUES ('https://assets.adidas.com/images/w_600,f_auto,q_auto/cb926e9c037e4cc5a2f9aabe0109b02b_9366/T-shirt_Tennis_Script_Bleu_FM4421_21_model.jpg','adidas t-shirt','25$');
INSERT INTO clothes (url,model,price) VALUES ('https://i.pinimg.com/originals/85/b8/a2/85b8a283ead7ffa4144f642371ec79f4.jpg','under armoour dri-fit','60$');
INSERT INTO clothes (url,model,price) VALUES ('https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aa54a059-fc27-4b3e-bf5c-d7cd291ec28b/nikecourt-seasonal-tennis-t-shirt-7bRDc0.png','nike t-shirt','30$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.mistertennis.com/images/2018-media/Under_Armour_Shorts_Blue_1309651_409_A_Main.jpg','under armour shorts','32$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.tennis-point.com/images/xl/CB484-E06689.jpg?v=101774257553-1','lucky in love women apparel','31$');
INSERT INTO clothes (url,model,price) VALUES ('https://www.pureracketsport.com/cms/wp-content/uploads/2017/12/Adidas-boys-club-shorts-black-tennis.jpg','adidas shorts for men','32$');