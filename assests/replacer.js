const qs = document.querySelector.bind(document);

const copied = document.querySelector('#copied');

const delay = ms => new Promise(res => setTimeout(res, ms));

function ifEmpty(input, fb) {
    return input ? `${input}` : fb;
}

function doReplace() {
    const device_name = qs('#device_name').value;
    const device_codename = qs('#device_codename').value;
    const name = qs('#name').value;
    const bugs = ifEmpty(qs('#bugs').value, 'You tell me');
    const donate_url = ifEmpty(qs('#donate_url').value, 'https://google.com');
    const xda_url = qs('#xda_url').value;
    const kernel_source_url = qs('#kernel_source_url').value;

    qs('#output').value =
        template.replace(/##DEVICE_NAME##/g, device_name)
        .replace(/##DEVICE_CODENAME##/g, device_codename)
        .replace(/##NAME##/g, name)
        .replace(/##BUGS##/g, bugs)
        .replace(/##DONATE_URL##/g, donate_url)
        .replace(/##XDA_URL##/g, xda_url)
        .replace(/##KERNEL_SOURCE_URL##/g, kernel_source_url)
}

qs('#form').addEventListener('submit', (event) => {
    event.preventDefault();

    doReplace();
    copied.style.opacity = 1;
    document.getElementById('output').select();
    document.execCommand('copy');
    document.getElementById('copied').innerHTML = 'Copied';
    delay(2000).then(() => {
        copied.style.opacity = 0;
    });
});