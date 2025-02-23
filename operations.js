document.getElementById('viewToggle').addEventListener('change', function() {
    const map = document.getElementById('map');
    if (this.checked) {
        map.style.filter = 'sepia(0%) contrast(110%)';
    } else {
        map.style.filter = 'sepia(5%) contrast(130%)';
    }
});

document.getElementById('initialStatisticsButton').addEventListener('click', function() {
    showInitialStatistics();
});

function initMap() {
    const mapOptions = {
        center: { lat: 17.9805, lng: 79.5311 },
        zoom: 16,
        styles: [
            { "elementType": "geometry", "stylers": [{ "color": "#1b1b2f" }] },
            { "elementType": "labels.text.fill", "stylers": [{ "color": "#a8a9ad" }] },
            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1b1b2f" }] },
            { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2d2d44" }] },
            { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#24243e" }] },
            { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#3b3b58" }] },
            { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#383856" }] },
            { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#3b3b58" }] }
        ]
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const locations = [
        { 
            name: 'Food Street', 
            lat: 17.9833, 
            lng: 79.5301, 
            statisticsPage: 'dashboard5.html',
            images: ['https://lh3.googleusercontent.com/p/AF1QipPd9_lktl-aLqdYXoGAYGADtKOjJjuyyMkRQx2w=s1360-w1360-h1020', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDo2UMxGlox6oOw24wY7V-4hJmDsQB8NtN9Q&s'] 
        },
        { 
            name: 'IFC A', 
            lat: 17.9819, 
            lng: 79.5319, 
            statisticsPage: 'dashboard2.html',
            images: ['https://www.jeppiaarinstitute.org/wp-content/uploads/2024/05/jit-Mess1-min.jpeg', 'https://s.abcnews.com/images/US/GTY_meth_lab_jt_140419y_16x9_992.jpg?w=384'] 
        },
        { 
            name: 'Admin Building', 
            lat: 17.9800, 
            lng: 79.5335, 
            statisticsPage: 'dashboard3.html',
            images: ['https://images.shiksha.com/mediadata/images/1607583729phpHigjGs.png', 'corporate drugs.jpg'] 
        },
        { 
            name: 'Domino\'s', 
            lat: 17.9786, 
            lng: 79.5295, 
            statisticsPage: 'dashboard4.html',
            images: ['https://media.licdn.com/dms/image/v2/D5622AQGiBnoYxOeOSg/feedshare-shrink_800/feedshare-shrink_800/0/1727871259446?e=2147483647&v=beta&t=2Dv9GrklT-XQgKmIXdkBDKb65is1oBRfJv2HwvMx2Mc', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-oehEcl7C9xeSgfVSSeYYtJ5RGmIIIneog&s'] 
        },
        { 
            name: 'NAB', 
            lat: 17.9827, 
            lng: 79.5342, 
            statisticsPage: 'dashboard1.html',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2uEdx8s8iuLQNIzEgLG-mxoIZd0G55h3Ag&s', 'https://www.shutterstock.com/image-photo/unrecognizable-high-school-students-dealing-600nw-2182689263.jpg'] 
        }
    ];

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            },
            animation: google.maps.Animation.BOUNCE
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="color: white; background-color: #1b1b1b; padding: 10px; border-radius: 8px;">${location.name}</div>`
        });

        marker.addListener('mousedown', () => infoWindow.open(map, marker));
        marker.addListener('mouseup', () => infoWindow.close());

        marker.addListener('click', () => {
            const leftp = document.getElementById('left-panel');
            leftp.innerHTML = `
                <h3>${location.name}</h3>
                <img src="${location.images[0]}" alt="Image 1" style="width:100%; margin-bottom: 10px;">
                <img src="${location.images[1]}" alt="Image 2" style="width:100%; margin-bottom: 10px;">
                <button class="statistics-button" onclick="showStatisticsInLeftPanel('${location.statisticsPage}')">Show Statistics</button>
            `;
        });
    });
}

function showStatisticsInLeftPanel(page) {
    const leftPanel = document.getElementById('left-panel');
    
    leftPanel.innerHTML = `
        <iframe src="${page}" width="100%" height="600px" frameborder="0"></iframe>
    `;
}

function resetContent() {
    window.location.reload(); 
}