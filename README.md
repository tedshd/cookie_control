# cookie_control

cookie control

set cookie or update cookie or delete cookie

```JavaScript
cookieControl(<method>, <option>);
```

## **Method**(String)

* get
  * get this cookie
* set
  * set this cookie value
* delete
  * delete this cookie

## **Option**(Object)

### cookie_control

|key|type|required|description|example|
|---|---|---|---|---|
|name|string|yes|cookie name|'cookie_name'|
|value|string|yes|cookie value|'hello'|
|expiredTime|number|no|cookie expired time & unit is seconds|60|
|domain|string|no|cookie's domain|'example.com'|
|path|string|no|cookie's path|'/'|

**Notice:**

if expiredTime is empty, this cookie is session cookies.

## **Example**

```JavaScript

var opt = {
    name: 'test',
    value: '123321',
    expiredTime: 5*60
};

cookieControl('set', opt);

cookieControl('get', {
    name: 'test'
});

```

[Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
