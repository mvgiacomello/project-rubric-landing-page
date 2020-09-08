// Set to true to see console logs
const debug = true;
function logger(text) {
    if (debug) {
        console.log(text)
    }
}

/**
 * Dummy data for the excercise
 * This could hook into an API at some point
 */
function retrieveData() {
    return [
        {
            "code": "one",
            "title": "Section 1",
            "text": "One: Lorem ipsum dolor sit amet, consectetur adipiscing \
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna \
            aliqua. Varius sit amet mattis vulputate enim nulla. Sapien \
            pellentesque habitant morbi tristique. Est placerat in egestas \
            erat imperdiet sed euismod nisi. Massa tincidunt nunc pulvinar \
            sapien et ligula. Quam lacus suspendisse faucibus interdum posuere \
            lorem ipsum. Lectus proin nibh nisl condimentum id venenatis a \
            condimentum. Congue quisque egestas diam in arcu. Enim ut \
            tellus elementum sagittis vitae et leo duis ut. Tristique \
            et egestas quis ipsum. Est pellentesque elit ullamcorper dignissim \
            cras tincidunt lobortis feugiat. Enim eu turpis egestas pretium \
            aenean pharetra magna ac. Massa sed elementum tempus egestas sed. \
            Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Neque \
            aliquam vestibulum morbi blandit. Volutpat ac tincidunt vitae \
            semper. Dui faucibus in ornare quam viverra orci sagittis eu."
        },
        {
            "code": "two",
            "title": "Section 2",
            "text": "Two: Pellentesque sit amet porttitor eget dolor morbi \
            non. Sed id semper risus in hendrerit gravida rutrum. Sollicitudin \
            tempor id eu nisl. Ut venenatis tellus in metus. In hac habitasse \
            platea dictumst quisque. Neque aliquam vestibulum morbi blandit \
            cursus. Est ante in nibh mauris cursus mattis molestie a iaculis. \
            Enim sed faucibus turpis in eu mi bibendum neque egestas. Sodales \
            ut eu sem integer vitae justo eget magna fermentum. Ipsum dolor \
            sit amet consectetur adipiscing elit pellentesque habitant morbi. \
            Et netus et malesuada fames. In aliquam sem fringilla ut morbi \
            tincidunt. Velit egestas dui id ornare arcu odio ut sem nulla."
        },
        {
            "code": "three",
            "title": "Section 3",
            "text": "Three: Congue mauris rhoncus aenean vel elit scelerisque. \
            Nulla facilisi nullam vehicula ipsum a arcu cursus. Morbi tristique \
            senectus et netus et malesuada. Eget velit aliquet sagittis id. \
            In pellentesque massa placerat duis ultricies. Diam vulputate ut \
            pharetra sit amet aliquam id diam. Amet risus nullam eget felis \
            eget nunc lobortis. Sapien et ligula ullamcorper malesuada proin \
            libero nunc. Purus viverra accumsan in nisl nisi scelerisque. \
            Massa placerat duis ultricies lacus sed turpis tincidunt. \
            Vel quam elementum pulvinar etiam non quam lacus. Aliquet \
            porttitor lacus luctus accumsan tortor posuere ac ut. \
            Consectetur adipiscing elit pellentesque habitant morbi. \
            Duis at consectetur lorem donec massa sapien."
        },
        {
            "code": "four",
            "title": "Section 4",
            "text": "Four: In ante metus dictum at. Eu facilisis sed odio morbi \
            quis commodo. Aliquam faucibus purus in massa tempor nec feugiat. \
            Maecenas volutpat blandit aliquam etiam erat velit scelerisque. \
            Ullamcorper dignissim cras tincidunt lobortis feugiat. Fusce id \
            velit ut tortor pretium viverra suspendisse potenti. Platea \
            dictumst quisque sagittis purus sit amet volutpat consequat mauris. \
            Non consectetur a erat nam at lectus urna duis convallis. \
            Tellus mauris a diam maecenas sed enim. Lorem dolor sed viverra \
            ipsum. Eleifend mi in nulla posuere sollicitudin aliquam ultrices \
            sagittis orci. Egestas erat imperdiet sed euismod nisi porta lorem. \
            Integer eget aliquet nibh praesent. Cursus risus at ultrices mi \
            tempus imperdiet. A iaculis at erat pellentesque. Gravida in \
            fermentum et sollicitudin."
        },
        {
            "code": "five",
            "title": "Section 5",
            "text": "Five: Congue mauris rhoncus aenean vel elit scelerisque. \
            Nulla facilisi nullam vehicula ipsum a arcu cursus. Morbi tristique \
            senectus et netus et malesuada. Eget velit aliquet sagittis id. \
            In pellentesque massa placerat duis ultricies. Diam vulputate ut \
            pharetra sit amet aliquam id diam. Amet risus nullam eget felis \
            eget nunc lobortis. Sapien et ligula ullamcorper malesuada proin \
            libero nunc. Purus viverra accumsan in nisl nisi scelerisque. \
            Massa placerat duis ultricies lacus sed turpis tincidunt. \
            Vel quam elementum pulvinar etiam non quam lacus. Aliquet \
            porttitor lacus luctus accumsan tortor posuere ac ut. \
            Consectetur adipiscing elit pellentesque habitant morbi. \
            Duis at consectetur lorem donec massa sapien."
        },
        {
            "code": "six",
            "title": "Section 6",
            "text": "Six: Lorem ipsum dolor sit amet, consectetur adipiscing \
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna \
            aliqua. Varius sit amet mattis vulputate enim nulla. Sapien \
            pellentesque habitant morbi tristique. Est placerat in egestas \
            erat imperdiet sed euismod nisi. Massa tincidunt nunc pulvinar \
            sapien et ligula. Quam lacus suspendisse faucibus interdum posuere \
            lorem ipsum. Lectus proin nibh nisl condimentum id venenatis a \
            condimentum. Congue quisque egestas diam in arcu. Enim ut \
            tellus elementum sagittis vitae et leo duis ut. Tristique \
            et egestas quis ipsum. Est pellentesque elit ullamcorper dignissim \
            cras tincidunt lobortis feugiat. Enim eu turpis egestas pretium \
            aenean pharetra magna ac. Massa sed elementum tempus egestas sed. \
            Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Neque \
            aliquam vestibulum morbi blandit. Volutpat ac tincidunt vitae \
            semper. Dui faucibus in ornare quam viverra orci sagittis eu."
        }
    ]
}

/**
 * Builders
 * Note:
 *  Would be nice to break all this code into
 *  multiple files to make my life easier.
 *  Is this what webpack is for?
 */

function buildHeader(fragment) {
    const header = document.createElement('header');
    const menuList = document.createElement('ul');
    menuList.classList.add('top-menu');

    retrieveData().forEach(entry => {
        const menuEntry = document.createElement('li');
        const menuEntryLink = document.createElement('a');
        menuEntryLink.textContent = entry.title;
        menuEntryLink.href = `#${entry.code}`;
        menuEntryLink.name = `menu-${entry.code}`;
        menuEntryLink.classList.add('top-menu__entry');
        menuEntry.appendChild(menuEntryLink);
        menuList.appendChild(menuEntry);
    });
    header.appendChild(menuList);

    fragment.appendChild(header);
}

function buildMain(fragment) {
    const main = document.createElement('main');

    retrieveData().forEach(entry => {
        const section = document.createElement('section');

        const title = document.createElement('h1');
        const titleLink = document.createElement('a');
        titleLink.textContent = entry.title;
        titleLink.setAttribute('name', entry.code);
        titleLink.classList.add('section-link');
        title.appendChild(titleLink);
        section.appendChild(title);

        const content = document.createElement('p');
        content.textContent = entry.text;
        section.appendChild(content);

        main.appendChild(section);
    })

    fragment.appendChild(main);
}

function buildFooter(fragment) {
    const footer = document.createElement('footer');
    const footerText = "Footer: Lorem ipsum dolor sit amet.";
    footer.appendChild(document.createTextNode(footerText));

    fragment.appendChild(footer);
}

function updateClassesOnScroll() {
    // First clear the active menu and section
    document.querySelectorAll('.top-menu__entry').forEach(section => {
        section.classList.remove('menu-active');
    });
    document.querySelectorAll('.section-link').forEach(section => {
        section.classList.remove('section-active');
    });

    // Find the first section visible in the viewport and activate menu and section
    for (let section of document.querySelectorAll('.section-link')) {
        if (section.getBoundingClientRect().top >= 0) {
            section.classList.add('section-active');
            document.querySelector(`[name='menu-${section.name}']`).classList.add('menu-active');
            break;
        }
    }
}

function detectScrollStop() {
    let timer = null;
    window.addEventListener('scroll', () => {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(updateClassesOnScroll, 150);
    });
}

function render() {
    const fragment = document.createDocumentFragment();
    buildHeader(fragment)
    buildMain(fragment);
    buildFooter(fragment);
    detectScrollStop();
    document.getElementById('app').appendChild(fragment);
}

render();