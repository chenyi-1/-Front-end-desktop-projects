import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'
import { Button, Input, Space, Table, Popconfirm,Pagination } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import deletsa from "../../api/deletsa";


const Froms = (props) => {
  const data = props.name
  
  // console.log(data)
  console.log(props.name)
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  function goBack(){
    navigate(-1)
  }

    

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      // close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            搜索
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            重置
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleDelete  = (key) => {
    console.log(key)
    deletsa(key)
  }
  const columns = [
    {
      title: "时间",
      dataIndex: "date",
      key: "date",
      
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: "产品编码",
      dataIndex: "encode",
      key: "encode",
      
      ...getColumnSearchProps("encode"),
    },
    {
      title: "产品名称",
      dataIndex:"name",
      key:"name",
      ...getColumnSearchProps("name"),
    },
    {
      title:"规格型号",
      dataIndex:"Model",
      key:"key",
    },
    {
      title:"存放位置",
      dataIndex:"location",
      key:"location",
    },
    {
      title:"负责人",
      dataIndex:"Head",
      key:"Head",
    },
    {
      title:"数量",
      dataIndex:"quantity",
      key:"quantity",
    },
    {
      title:"单价",
      dataIndex:"unitprice",
      key:"unitprice",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <Space size="middle">
          <Button href="/addto">修改</Button>
          <Popconfirm title="是否彻底删除?" onConfirm={() => handleDelete(record.key)}>
            <Button >Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Button onClick={goBack}>返回</Button>
      <Button href="/addto">添加</Button>
      <Button>另存为</Button>
  <Table columns={columns} dataSource={data[0]} bordered={true} />
  {/* <Pagination defaultPageSize={15} /> */}
    </div>
    );
};
export default Froms;
