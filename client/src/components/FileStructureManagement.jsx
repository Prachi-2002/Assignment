import React, { useState, useEffect } from 'react';

// ========== Icons Components ==========
const FolderIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
  </svg>
);

const FileIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

const ChevronLeft = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m15 18-6-6 6-6"></path>
  </svg>
);

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

const ChevronDown = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const MoreVertical = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const Plus = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 5v14"></path>
    <path d="M5 12h14"></path>
  </svg>
);

const Filter = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const EditIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const TrashIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

const UploadIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

// ========== Mock Data ==========
const initialData = {
  folders: [
    { id: 1, name: 'Mission_Logs', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 2, name: 'Satellite_Data', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 3, name: 'Open_Source_Tools', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 4, name: 'Cybersecurity_Reports', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder', 
      children: [
        { id: 5, name: 'Operating_Systems', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder',
          children: [
            { id: 8, name: 'note1.docx', description: '---', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'file' }
          ]
        },
        { id: 6, name: 'Networking_Protocols', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' }
      ]
    },
    { id: 7, name: 'Indian_Navy', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 9, name: 'VR_AR_Experiments', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 10, name: 'Autonomous_Systems', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 11, name: 'Astronomy', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 12, name: 'Astronomy', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 13, name: 'Astronomy', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
    { id: 14, name: 'Astronomy', description: 'This file includes the most dangerous se...', createdAt: '17/03/2025 23:30', updatedAt: '17/03/2025 23:30', type: 'folder' },
  ]
};

// ========== Dropdown/Popover Menu Component ==========
const DropdownMenu = ({ visible, x, y, onOptionSelect, onClose }) => {
  if (!visible) return null;
  
  return (
    <div 
      className="absolute bg-white shadow-lg rounded-md py-1 z-50 w-56"
      style={{ top: y, left: x }}
    >
      <button 
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-gray-700 text-sm"
        onClick={() => onOptionSelect('edit')}
      >
        <EditIcon size={16} className="mr-2" /> Edit
      </button>
      <button 
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600 text-sm"
        onClick={() => onOptionSelect('delete')}
      >
        <TrashIcon size={16} className="mr-2" /> Delete
      </button>
      <div className="border-t border-gray-200 my-1"></div>
      <button 
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-gray-700 text-sm"
        onClick={() => onOptionSelect('createFolder')}
      >
        <FolderIcon size={16} className="mr-2" /> Create Folder
      </button>
      <button 
        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-gray-700 text-sm"
        onClick={() => onOptionSelect('uploadDocument')}
      >
        <UploadIcon size={16} className="mr-2" /> Upload Document
      </button>
    </div>
  );
};

// ========== Breadcrumb Navigation Component ==========
const BreadcrumbNav = ({ path }) => {
  return (
    <div className="flex items-center text-sm">
      {path.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="mx-1 text-gray-400" />}
          <span className={`${index === path.length - 1 ? 'font-medium text-gray-800' : 'text-gray-500'}`}>
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

// ========== Sidebar Folder Item Component ==========
const SidebarFolderItem = ({ item, level = 0, selectedId, expandedFolders, onFolderSelect, onFolderToggle }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedFolders[item.id];
  const isSelected = selectedId === item.id;
  
  return (
    <>
      <div 
        className={`flex items-center py-2 px-2 hover:bg-gray-100 cursor-pointer transition-colors ${isSelected ? 'bg-gray-100' : ''}`}
        style={{ paddingLeft: `${level * 12 + 16}px` }}
        onClick={() => onFolderSelect(item.id)}
      >
        <div className="flex items-center flex-1 overflow-hidden">
          {item.type === 'folder' ? (
            <FolderIcon size={18} className="text-amber-500 min-w-5 mr-2" />
          ) : (
            <FileIcon size={18} className="text-blue-500 min-w-5 mr-2" />
          )}
          <span className="text-sm text-gray-700 truncate">{item.name}</span>
        </div>
        {hasChildren && (
          <button 
            className="w-5 h-5 flex items-center justify-center text-gray-500 hover:bg-gray-200 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onFolderToggle(item.id);
            }}
          >
            <Plus size={14} className={`transform transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
          </button>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div>
          {item.children.map(child => (
            <SidebarFolderItem 
              key={child.id} 
              item={child} 
              level={level + 1}
              selectedId={selectedId}
              expandedFolders={expandedFolders}
              onFolderSelect={onFolderSelect}
              onFolderToggle={onFolderToggle}
            />
          ))}
        </div>
      )}
    </>
  );
};

// ========== Sidebar Component ==========
const Sidebar = ({ folders, selectedId, expandedFolders, onFolderSelect, onFolderToggle }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Folders & Documents</h2>
      </div>
      
      <div className="flex border-b border-gray-200">
        <div className="flex-1 p-4 text-center border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
          <FolderIcon size={20} className="mx-auto mb-1 text-gray-500" />
          <div className="text-xs font-medium text-gray-500">Folders</div>
          <div className="text-lg font-semibold text-gray-800">200+</div>
        </div>
        
        <div className="flex-1 p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
          <FileIcon size={20} className="mx-auto mb-1 text-gray-500" />
          <div className="text-xs font-medium text-gray-500">Documents</div>
          <div className="text-lg font-semibold text-gray-800">200+</div>
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        {folders.map(folder => (
          <SidebarFolderItem 
            key={folder.id} 
            item={folder}
            selectedId={selectedId}
            expandedFolders={expandedFolders}
            onFolderSelect={onFolderSelect}
            onFolderToggle={onFolderToggle}
          />
        ))}
      </div>
    </div>
  );
};

// ========== Content Item Component ==========
const ContentItem = ({ item, expandedFolders, onFolderToggle, onContextMenu }) => {
  const isExpanded = expandedFolders[item.id];
  const hasChildren = item.children && item.children.length > 0;
  
  return (
    <>
      <div 
        className="grid grid-cols-12 items-center py-3 px-4 hover:bg-gray-50 border-b border-gray-100 transition-colors group relative"
        onContextMenu={(e) => {
          e.preventDefault();
          onContextMenu(e, item.id);
        }}
      >
        <div className="col-span-5 flex items-center overflow-hidden">
          {hasChildren && (
            <button 
              className="mr-2"
              onClick={() => onFolderToggle(item.id)}
            >
              <ChevronDown 
                size={16} 
                className={`transform transition-transform text-gray-400 ${isExpanded ? '' : '-rotate-90'}`} 
              />
            </button>
          )}
          {!hasChildren && <div className="w-6" />}
          
          {item.type === 'folder' ? (
            <div className="flex items-center overflow-hidden">
              <div className="bg-amber-50 w-8 h-8 rounded-md flex items-center justify-center mr-3 border border-amber-100">
                <FolderIcon size={18} className="text-amber-500" />
              </div>
              <span className="text-gray-800 truncate">{item.name}</span>
            </div>
          ) : (
            <div className="flex items-center overflow-hidden">
              <div className="bg-blue-50 w-8 h-8 rounded-md flex items-center justify-center mr-3 border border-blue-100">
                <FileIcon size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-800 truncate">{item.name}</span>
            </div>
          )}
        </div>
        
        <div className="col-span-3 text-sm text-gray-500 truncate">
          {item.description || "---"}
        </div>
        
        <div className="col-span-2 text-sm text-gray-500">
          {item.createdAt}
        </div>
        
        <div className="col-span-1 text-sm text-gray-500">
          {item.updatedAt}
        </div>
        
        <div className="col-span-1 flex justify-end">
          <button 
            className="p-1 hover:bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onContextMenu(e, item.id);
            }}
          >
            <MoreVertical size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div>
          {item.children.map(child => (
            <ContentItem 
              key={child.id} 
              item={child}
              expandedFolders={expandedFolders}
              onFolderToggle={onFolderToggle}
              onContextMenu={onContextMenu}
            />
          ))}
        </div>
      )}
    </>
  );
};

// ========== Content Area Component ==========
const ContentArea = ({ items, expandedFolders, onFolderToggle, onContextMenu }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
      {/* Table header */}
      <div className="grid grid-cols-12 bg-white p-4 border-b border-gray-200 font-medium text-sm sticky top-0 z-10">
        <div className="col-span-5 text-gray-600">Name</div>
        <div className="col-span-3 text-gray-600">Description</div>
        <div className="col-span-2 text-gray-600">Created at</div>
        <div className="col-span-2 text-gray-600">Updated at</div>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {items.map(item => (
          <ContentItem 
            key={item.id} 
            item={item}
            expandedFolders={expandedFolders}
            onFolderToggle={onFolderToggle}
            onContextMenu={onContextMenu}
          />
        ))}
      </div>
    </div>
  );
};

// ========== Header Component ==========
const Header = ({ path, onBackClick }) => {
  return (
    <div className="bg-white p-4 border-b border-gray-200 flex items-center shadow-sm">
      <button 
        className="p-1 mr-4 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
        onClick={onBackClick}
      >
        <ChevronLeft size={20} />
      </button>
      
      <BreadcrumbNav path={path} />
      
      <div className="ml-auto flex items-center space-x-2">
        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
          <Filter size={18} />
        </button>
        
        <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-colors">
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

// ========== Create Folder & Upload Document Buttons ==========
const ActionButtons = () => {
  return (
    <div className="absolute right-8 top-24 flex flex-col gap-2 z-20">
      <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center">
          <FolderIcon size={16} className="mr-2 text-gray-500" />
          <span>Create Folder</span>
        </button>
        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded flex items-center">
          <UploadIcon size={16} className="mr-2 text-gray-500" />
          <span>Upload Document</span>
        </button>
      </div>
    </div>
  );
};

// ========== Main App Component ==========
const FileManagementSystem = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    4: true,
    5: true
  });
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [currentPath, setCurrentPath] = useState(['NSM', 'Folders & Documents']);
  const [dropdownMenu, setDropdownMenu] = useState({ visible: false, x: 0, y: 0, itemId: null });
  const [showActionButtons, setShowActionButtons] = useState(false);

  const toggleFolder = (folderId) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  const handleContextMenu = (e, itemId) => {
    e.preventDefault();
    setDropdownMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      itemId
    });
  };

  const handleClick = () => {
    if (dropdownMenu.visible) {
      setDropdownMenu({ ...dropdownMenu, visible: false });
    }
  };

  const handleDropdownOption = (action) => {
    console.log(`Performing ${action} on item ${dropdownMenu.itemId}`);
    setDropdownMenu({ ...dropdownMenu, visible: false });
    
    // Example implementation for different actions
    if (action === 'createFolder') {
      setShowActionButtons(true);
      setTimeout(() => setShowActionButtons(false), 3000);
    }
  };

  const handleBackClick = () => {
    if (currentPath.length > 2) {
      setCurrentPath(prev => prev.slice(0, -1));
    }
  };

  const handleFolderSelect = (folderId) => {
    setSelectedFolderId(folderId);
    
    // Find the folder name and update the path
    const folder = findFolder(initialData.folders, folderId);
    if (folder) {
      // In a real app, you would build the full path here
      setCurrentPath([...currentPath.slice(0, -1), folder.name]);
    }
  };

  // Helper function to find a folder by id
  const findFolder = (folders, id) => {
    for (const folder of folders) {
      if (folder.id === id) {
        return folder;
      }
      if (folder.children) {
        const found = findFolder(folder.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dropdownMenu.visible]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar 
        folders={initialData.folders}
        selectedId={selectedFolderId}
        expandedFolders={expandedFolders}
        onFolderSelect={handleFolderSelect}
        onFolderToggle={toggleFolder}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header Component */}
        <Header 
          path={currentPath}
          onBackClick={handleBackClick}
        />
        
        {/* Content Area Component */}
        <ContentArea 
          items={initialData.folders}
          expandedFolders={expandedFolders}
          onFolderToggle={toggleFolder}
          onContextMenu={handleContextMenu}
        />
        
        {/* Dropdown Menu Component */}
        <DropdownMenu 
          visible={dropdownMenu.visible}
          x={dropdownMenu.x}
          y={dropdownMenu.y}
          onOptionSelect={handleDropdownOption}
        />
        
        {/* Action Buttons (conditionally shown) */}
        {showActionButtons && <ActionButtons />}
      </div>
    </div>
  );
};

export default FileManagementSystem;