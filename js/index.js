var apiUrl = 'https://api.github.com/repos/AzureBytes/workbooks/releases/latest';

$(document).ready(function () {
    $.getJSON(apiUrl, function (data) {
        $('a.dynamic_link').each(function (index, item) {
            $hyperlink = $(item);
            if ($hyperlink.attr('id')) {
                updateLink($hyperlink, data.assets, $hyperlink.attr('id'));
            }
        });
    });
});

function updateLink(hyperlink, assets, matchName) {
    var matchAsset = assets.filter(function (asset) {
        return asset.name.substring(0, matchName.length) == matchName;
    })[0];
    hyperlink.text('Download ' + matchAsset.name);
    hyperlink.attr('title', matchAsset.name);
    hyperlink.attr('href', matchAsset.browser_download_url);
};