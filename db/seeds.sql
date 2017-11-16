
INSERT INTO categorytbls
(primarycat, secondarycat)
values ('Mens',''), ('Ladies',''),
('Kids',''), ('Mens', 'Shirts'), ('Mens', 'Pants'),
('Mens', 'Shoes'), ('Ladies','Dresses'), ('Ladies', 'Shirts'),
('Ladies','Pants'), ('Ladies','Shoes'), ('Kids','Shirts'),
('Kids','Pants'),('Kids','Shoes');

INSERT INTO merchtbls
(userid, title, description, photolink, price, category, status, categorytblId, usertblId)
VALUES (1, 'my first item', 'this item is the first one I listed', 
'https://via.placeholder.com/320x180',12.25,'item1',0, 1, 1);
