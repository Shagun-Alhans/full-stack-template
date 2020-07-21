import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardMedia, CardActionArea, CardActions, Button, Paper, Grid } from '@material-ui/core';
import { imageListStyles } from '../styles/imageList';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

      selectImage = e => {
         this.props.setSelectedImage(e.target.src);
      }

      clearSelection = e => {
        this.props.setSelectedImage('');
      }
    
  render() {
      const { images, selectedImage } = this.props;
    return (
            <Grid container>
                <Grid item xs={3} />l
                <Grid item xs={3} style={imageListStyles.imgGrid}>
                <Paper>
                {images && images.length > 0 && images.map(image => {
                    return (
                        <Card key={image.id}>
                            <CardActionArea>
                            <CardMedia
                            component="img"
                            onClick={this.selectImage}
                            style={imageListStyles.imgCardHeight}
                            image={image.download_url}
                            title={image.author}
                            />
                            </CardActionArea>
                        </Card>
                     )
                })}
               </Paper>
                </Grid>
                <Grid item xs={3} style={imageListStyles.selectedImageGrid}>
               {selectedImage && (
                    <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        style={imageListStyles.imgCardHeight}
                        image={selectedImage}
                        />
                    </CardActionArea>
                    <CardActions style={imageListStyles.clearBtn}>
                        <Button size="small" color="primary" variant="contained" onClick={this.clearSelection}>
                        Clear
                        </Button>
                    </CardActions>
                </Card>
               )}
                </Grid>
                <Grid item xs={3} />
            </Grid>
    );
  }
}

ImageList.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.string,
  setSelectedImage: PropTypes.func
};

const mapState = ({ images }) => ({
    images: images.imgs,
    selectedImage: images.selectedImage
  });

  const mapDispatch = ({ images }) => ({
    setSelectedImage: images.setSelectedImage
  });
 

export default connect(mapState, mapDispatch)(ImageList);
