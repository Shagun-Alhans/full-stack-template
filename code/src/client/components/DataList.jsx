import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/datalist.css';

class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0
        };
      }

      getData = e => {
        this.props.fetchAll();
      }
    
      removeData = () => {
        const data = this.props.data.length > 0 ? this.props.data : [];
        data.splice(this.state.index, 1);
        this.props.updateList(data);
      }

  render() {
      const { data } = this.props;
   return (
       <div class="grid-container">
       <div class="grid-item1"></div>
       <div class="grid-item1"></div>
       <div class="grid-item">
           <embed  src="../../../public/dev-test_img.svg" type="image/svg+xml" />
      </div>  
       <div class="grid-item1"></div>
       <div class="grid-item1"></div>
       <div class="grid-item">
         <div>
         <dl class="list">
  {data.length > 0 && data.map((ele, index) => {
    return (
    <dt>{index}: {ele.email}</dt>
    )
  })}
</dl>
         </div>
         </div>  
       <div class="grid-item1"></div>
       <div class="grid-item1"></div>
       <div class="grid-item">
      <p> <button type="button" onclick={this.getData()}>Pull Data</button></p>
      <p>
      <span>
       <input type="number" id="index" name="index" value={this.state.index} />
       <button type="button" onclick={this.removeData()}>Remove</button>
       </span>
      </p>
         </div>  
     </div>
   );
  }
}

DataList.propTypes = {
  data: PropTypes.array,
  fetchAll: PropTypes.func
};

const mapState = ({ dataList }) => ({
    data: dataList.data
  });

  const mapDispatch = ({ dataList }) => ({
    fetchAll: dataList.fetchAll,
    updateList: dataList.updateList
  });
 

export default connect(mapState, mapDispatch)(DataList);
