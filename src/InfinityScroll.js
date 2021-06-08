import React, {Component} from "react";

const photos_list = [
    {
        "id": 1,
        "url": "https://c8.alamy.com/comp/HPTTJN/womens-haircut-hairdresser-beauty-salon-professional-hairdresser-making-HPTTJN.jpg"
    },
    {
        "id": 2,
        "url": "https://static1.bigstockphoto.com/4/8/3/large1500/384528260.jpg"
    },
    {
        "id": 3,
        "url": "https://static3.bigstockphoto.com/4/8/3/large1500/384528275.jpg"
    },
    {
        "id": 4,
        "url": "https://as1.ftcdn.net/jpg/02/65/48/74/500_F_265487409_br5Ts9tE7B1v4lGpqYFfVQcX6m0j995a.jpg"
    },
    {
        "id": 5,
        "url": "https://st3.depositphotos.com/13045298/19068/i/1600/depositphotos_190682240-stock-photo-hair-salon-woman-hairstyle-hairdresser.jpg"
    },
    {
        "id": 6,
        "url": "https://image.shutterstock.com/image-photo/womens-haircut-woman-hairdresser-making-260nw-1789822718.jpg"
    },
    {
        "id": 7,
        "url": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        "id": 8,
        "url": "https://c8.alamy.com/comp/2BC027R/two-women-receiving-haircut-by-two-hairdressers-in-hair-salon-2BC027R.jpg"
    },
    {
        "id": 9,
        "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/senior-woman-in-the-hair-salon-royalty-free-image-1592563838.jpg"
    },
    {
        "id": 10,
        "url": "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
        "id": 11,
        "url": "https://previews.123rf.com/images/kizer13/kizer131608/kizer13160800050/64915772-hairdresser-doing-haircut-for-women-in-hairdressing-salon.jpg"
    }
];

const photos_number = photos_list.length;

class ScrollComponent extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            loading: false,
            prevY: 0
        };
    }

    componentDidMount() {
        this.getPhotos();

        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            this.getPhotos();
        }
        this.setState({prevY: y});
    }

    getPhotos() {
        const current_photos_number = this.state.photos.length;
        if (current_photos_number !== photos_number) {
            this.setState({loading: true});
            const step = 5;
            if (current_photos_number + step > photos_number) {
                this.setState({photos: photos_list});
            } else {
                this.setState({photos: photos_list.slice(0, current_photos_number + step)})
            }
            this.setState({loading: false});
        }
    }

    render() {
        const containerCSS = {
            textAlign: "center"
        };

        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };

        const imageCSS = {
            height: "720px",
            width: "1080px",
            margin: "20px"
        }

        return (
            <div className="container" style={containerCSS}>
                {this.state.photos.map(photo => (
                    <img src={photo.url} key={photo.id} style={imageCSS}/>
                ))}
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    style={loadingCSS}
                >
                </div>
            </div>
        );
    }
}

export default ScrollComponent;