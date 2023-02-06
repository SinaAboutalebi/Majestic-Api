//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

module.exports = async (body) => {

    let embed = {
        timestamp: new Date().toISOString(),
    };

    //Set Embeds Parameters===================================================//
    if (body.title) {
        embed.title = body.title;
    }
    if (body.url) {
        embed.url = body.url;
    }

    if (body.description) {
        embed.description = body.description;
    }

    if (body.thumbnail) {
        embed.thumbnail = {
            url: body.thumbnail,
        };
    }

    if (body.image) {
        embed.image = {
            url: body.image,
        };
    }

    if (body.footer) {
        embed.footer = {
            text: body.footer,
        };
    }

    if (body.footerUrl) {
        embed.footer.icon_url = body.footerUrl;
    }

    if (body.color) {
        embed.color = parseInt(body.color.split("#")[1], 16);
    }

    if(!body.role) {
        body.role = "none"
    }

    return embed;

}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//