import React, { useState, createContext, useContext } from "react";

type Photo = {
  url: string;
  id: string;
  name: string;
};

type PhotoContext = {
  photos: Photo[];
  setSelectedPhoto: React.Dispatch<React.SetStateAction<Photo | undefined>>;
  selectedPhoto: Photo | undefined;
};

const photoContext = createContext<PhotoContext | undefined>(undefined);

export const PhotoProvider: React.FC = ({ children }) => {
  const photos: Photo[] = [
    {
      url: "https://images.unsplash.com/photo-1541780815498-ffd0f2d0d0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      id: "1",
      name: "Foggy Trees",
    },
    {
      url: "https://images.unsplash.com/photo-1621519991769-ad15976f56fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      id: "2",
      name: "Milky way",
    },
    {
      url: "https://images.unsplash.com/photo-1537373010424-cc7ec95873ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      id: "5",
      name: "Bison",
    },
    {
      url: "https://images.unsplash.com/photo-1540202404-b2979d19ed37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3031&q=80",
      id: "4",
      name: "Whale",
    },
    {
      url: "https://images.unsplash.com/photo-1604542031386-b338982b656b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
      id: "3",
      name: "Glacier National Park",
    },
    {
      url: "https://images.unsplash.com/photo-1503505129851-abaf7f6140b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      id: "7",
      name: "Toronto",
    },
  ];

  const { Provider } = photoContext;
  const [selectedPhoto, setSelectedPhoto] = useState<Photo[] | undefined>();

  return (
    <Provider
      value={{
        photos,
        selectedPhoto,
        setSelectedPhoto,
      }}
    >
      {children}
    </Provider>
  );
};

const usePhoto = (): PhotoContext => {
  const context = useContext(photoContext);
  return context;
};

export default usePhoto;
