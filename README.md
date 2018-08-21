# cookie_control

cookie control

set cookie or update cookie or delete cookie

```JavaScript
new cookieControl(<option>);
```

## **Method**

* get
  * get this cookie
* update (option)
  * update this cookie value or expired time
* delete
  * delete this cookie

## **Option**

### cookie_control

|key|type|required|description|example|
|---|---|---|---|---|
|name|string|yes|cookie name|'cookie_name'|
|value|string|yes|cookie value|'hello'|
|expiredTime|number|no|cookie expired time & unit is seconds|60|
|domain|string|no|cookie's domain|'example.com'|
|path|string|no|cookie's path|'/'|

### update

|key|type|required|description|example|
|---|---|---|---|---|
|value|string|no|modify value|'world'|
|expiredTime|number|no|update expired time & unit is seconds|60|

## **Example**

```JavaScript
var opt = {
    name: 'test',
    value: '123321',
    expiredTime: 5*60
};
var test = new cookieControl(opt);

test.update({
    value: '456654'
});

test.delete();
```
