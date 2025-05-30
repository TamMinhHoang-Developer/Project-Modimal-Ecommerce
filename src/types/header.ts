export type headerData = {
  headerName: string;
  headerKey: string;
  headerImgURI: headerImage[];
  headerData: headerCollection[];
};

export type headerCollection = {
  collectionName: string;
  collectionKey: string;
  collectionData: string[];
};

export type headerImage = {
  imageURI: string;
  imageLabel: string;
}