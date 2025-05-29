import type { headerData } from "../../types/header";

export const headerCollectionData: headerData[] = [
  {
    headerName: "Collection",
    headerKey: "collection",
    headerImgURI: [
      {
        imageURI: "./images/_img-head-2.png",
        imageLabel: "Blouses"
      },
      {
        imageURI: "./images/_img-head-1.png",
        imageLabel: "Plus Size"
      }
    ],
    headerData: [
      {
        collectionName: "Category",
        collectionKey: "category",
        collectionData: [
          "Shop All",
          "Boluses & Top",
          "Pants",
          "Dresses & Jumpsuits",
          "Outwear & Jackets",
          "Pullovers",
          "Tees",
          "Shorts & Skirts",
        ],
      },
      {
        collectionName: "Featured",
        collectionKey: "featured",
        collectionData: ["New In", "Modiweek", "Plus Size", "Best Seller"],
      },
      {
        collectionName: "More",
        collectionKey: "more",
        collectionData: ["Bundles", "Occasion Wear", "Matching Set", "Suiting"],
      },
    ],
  },
  {
    headerName: "New In",
    headerKey: "new in",
    headerImgURI: [
      {
        imageURI: "./images/_img-head-3.png",
        imageLabel: "Fall Collection"
      },
      {
        imageURI: "./images/_img-head-4.png",
        imageLabel: "Boluses"
      },
      {
        imageURI: "./images/_img-head-5.png",
        imageLabel: "Dresses"
      }
    ],
    headerData: [
      {
        collectionName: "Category",
        collectionKey: "category",
        collectionData: [
          "Shop All",
          "Tops & Boluses",
          "Tees",
          "Pants",
          "Jackets & Outwears",
          "Pullovers",
          "Dresses & Jumpsuits",
          "Shorts & Skirts",
        ],
      },
      {
        collectionName: "Trending",
        collectionKey: "trending",
        collectionData: ["Plus Size", "Fall Collection", "Modiweek"],
      },
    ],
  },
  {
    headerName: "Modiweek",
    headerKey: "modiweek",
    headerImgURI: [],
    headerData: [],
  },
  {
    headerName: "Plus Size",
    headerKey: "plus size",
    headerImgURI: [
      {
        imageURI: "./images/_img-head-6.png",
        imageLabel: "Pants"
      },
      {
        imageURI: "./images/_img-head-7.png",
        imageLabel: "Dresses"
      },
      {
        imageURI: "./images/_img-head-8.png",
        imageLabel: "Blouses"
      }
    ],
    headerData: [
        {
            collectionName: "Category",
            collectionKey: "category",
            collectionData: [
                "Shop All",
                "Tops & Boluses",
                "Tees",
                "Pants",
                "Jackets & Outwears",
                "Pullovers",
                "Dresses & Jumpsuits",
                "Shorts & Skirts",
            ],
        }
    ],
  },
  {
    headerName: "Sustainability",
    headerKey: "sustainability",
    headerImgURI: [
      {
        imageURI: "./images/_img-head-9.png",
        imageLabel: ""
      },
      {
        imageURI: "./images/_img-head-10.png",
        imageLabel: ""
      },
    ],
    headerData: [
        {
            collectionName: "Sustainability",
            collectionKey: "sustainability",
            collectionData: [
                "Mission",
                "Processing",
                "Materials",
                "Packaging",
                "Product Care",
                "Our Suppliers"
            ],
        }
    ],
  }
];
