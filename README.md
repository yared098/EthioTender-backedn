
Initial project file structure 

ethiotender/
├── config/
│   ├── dbConfig.js                # Configuration for different DBs
│   └── firebaseConfig.js           # Firebase-specific config
├── models/
│   └── Tender.js                   # MongoDB model
├── routes/
│   └── tenderRoutes.js             # Routes for Tender CRUD operations
├── services/
│   ├── database/
│   │   ├── BaseDBService.js        # Generic DB functions (CRUD)
│   │   ├── FirebaseDBService.js    # Firebase DB specific functions
│   │   ├── MongoDBDBService.js     # MongoDB DB specific functions
│   │   ├── MySQLDBService.js       # MySQL DB specific functions
│   │   ├── SupabaseDBService.js    # Supabase DB specific functions
│   │   └── dbFactory.js            # Factory to select DB type
│   └── tenderService.js            # Logic for managing tenders (calling DB service)
├── controllers/
│   └── tenderController.js         # Controller for tender-related operations
├── .env                            # Store sensitive environment variables
├── server.js                       # Entry point (setup Express, middleware, routes)
└── package.json
# EthioTender-backedn
