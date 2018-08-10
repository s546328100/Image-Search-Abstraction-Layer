const axios = require('axios');

exports.search = async ctx => {
    let id = ctx.params.id;
    let {offset} = ctx.query;

    let {key = '9785050-400b2cde10c7cab43ac5686cd'} = process.env;

    let imageReqUrl = `https://pixabay.com/api/?key=${key}&q=${id}&image_type=photo`;
    if (offset) imageReqUrl += `&per_page=${offset}`;

    let res = await axios.get(imageReqUrl).catch(err => {
        return {error: err.message};
    });
    let data = res.data;
    ctx.body = data;
};
