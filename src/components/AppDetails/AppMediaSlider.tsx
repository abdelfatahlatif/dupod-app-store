import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt: string;
  thumbnail: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    url: 'https://picsum.photos/id/1015/800/500',
    thumbnail: 'https://picsum.photos/id/1015/150/100',
    alt: 'Mountain Landscape'
  },
  {
    type: 'image',
    url: 'https://picsum.photos/id/1025/800/500',
    thumbnail: 'https://picsum.photos/id/1025/150/100',
    alt: 'Cute Dog'
  },
  {
    type: 'image',
    url: 'https://picsum.photos/id/1043/800/500',
    thumbnail: 'https://picsum.photos/id/1043/150/100',
    alt: 'River Through Forest'
  },
  {
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/id/1043/150/100',
    alt: 'Big Buck Bunny Video'
  }
];

interface Props {
  appId: string;
}

const AppMediaSlider: React.FC<Props> = ({ appId }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item: MediaItem) => {
    return (
      <div
        onClick={() => setSelectedItem(item)}
        style={{ cursor: 'pointer', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9' }}
      >
        {item.type === 'image' ? (
          <img src={item.url} alt={item.alt} style={{ maxHeight: '100%', maxWidth: '100%' }} />
        ) : (
          <div style={{ position: 'relative' }}>
            <img src={item.thumbnail} alt={item.alt} style={{ maxHeight: '100%', maxWidth: '100%' }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.6)',
              padding: '10px 15px',
              borderRadius: '50%',
              fontSize: '24px'
            }}>
              ▶
            </div>
          </div>
        )}
      </div>
    );
  };

  // const thumbnailTemplate = (item: MediaItem) => (
  //   <img src={item.thumbnail} alt={item.alt} style={{ width: '100%' }} />
  // );

  return (
    <div className="mb-5">
      <h4>Media {appId}</h4>
      <Galleria
        value={mediaItems}
        //numVisible={3}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        //showThumbnails
        showItemNavigators
        //showIndicators
        item={itemTemplate}
        //thumbnail={thumbnailTemplate}
        style={{ maxWidth: '800px', margin: '0 auto', background: '#ffffff' }}
        circular
        autoPlay={false}
        showThumbnails={false}
        itemNextIcon="pi pi-chevron-right"
        itemPrevIcon="pi pi-chevron-left"
      />

      <Dialog
        // header={selectedItem?.type === 'image' ? 'Image Preview' : 'Video Preview'}
        visible={!!selectedItem}
        onHide={() => setSelectedItem(null)}
        closable={false}
        dismissableMask={true}
        modal
        // style={{ width: '75vw' }}        
        className="fullscreen-image-dialog"
        contentStyle={{ padding: 0 }}
      >
        {selectedItem?.type === 'image' ? (
          <img src={selectedItem.url} alt={selectedItem.alt} className="fullscreen-image" />
        ) : (
          <video src={selectedItem?.url} controls autoPlay className="fullscreen-image" />
        )}
      </Dialog>
    </div>
  );
};

export default AppMediaSlider;
