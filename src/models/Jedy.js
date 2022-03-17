const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  Date: {
    type: 'date',
    require: true,
  },
  Doc_number: {
    type: 'number',
    require: true,
  },
  Status: {
    type: 'string',
    require: true,
  },
  Line: {
    type: 'Object',
    require: true,
    Amount: {
      type: 'number',
      require: true,
    },
    Detailtype: {
      type: 'string',
      require: true,
    },
    ExpenseDetail: {
      type: 'Object',
      require: true,
      customer: {
        type: 'Object',
        require: true,
        value: {
          type: 'string',
          require: true,
        },
        name: {
          type: 'string',
          require: true,
        },
        ref: {
          type: 'Object',
          require: true,
          value: {
            type: 'string',
            require: true,
          },
          name: {
            type: 'string',
            require: true,
          },
        },
        Account: {
          type: 'Object',
          require: true,
          value: {
            type: 'string',
            require: true,
          },
          name: {
            type: 'string',
            require: true,
          },
        },
        LineStatus: {
          type: 'string',
          require: true,
        },
      },
    },
  },
  Vendor: {
    type: 'Object',
    require: true,
    value: {
      type: 'number',
      require: true,
    },
    name: {
      type: 'string',
      require: true,
    },
  },
  TotalAmt: {
    type: 'number',
    require: true,
  },
});

module.exports = mongoose.model('ProductCollection', productSchema);
