var data = `
[
    {
      "id": 1609,
      "name": "SUSE Linux Enterprise Desktop",
      "identifier": "SLED",
      "version": "15",
      "arch": "x86_64",
      "cpe": "cpe:/o:suse:sled:15",
      "free": false,
      "description": "SUSE Linux Enterprise offers a comprehensive suite of products built on a single code base. The platform addresses business needs from the smallest thin-client devices to the world's most powerful high-performance computing and mainframe servers. SUSE Linux Enterprise offers common management tools and technology certifications across the platform, and each product is enterprise-class. SUSE Linux Enterprise provides more than a cute desktop product or a basic server offering. It is the only Linux platform for enterprise computing, and it is now replacing UNIX* and Windows* as well.",
      "release_stage": "released",
      "eula_url": "/repo/SUSE/Products/SLE-Product-SLED/15/x86_64/product.license/",
      "repositories": [
        {
          "id": 2747,
          "url": "https://download.nvidia.com/suse/sle15/",
          "name": "SLE-15-GA-Desktop-NVIDIA-Driver",
          "description": "SLE-15-GA-Desktop-NVIDIA-Driver",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2748,
          "url": "/repo/SUSE/Updates/SLE-Product-SLED/15/x86_64/update/",
          "name": "SLE-Product-SLED15-Updates",
          "description": "SLE-Product-SLED15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2749,
          "url": "/repo/SUSE/Products/SLE-Product-SLED/15/x86_64/product/",
          "name": "SLE-Product-SLED15-Pool",
          "description": "SLE-Product-SLED15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3102,
          "url": "/repo/SUSE/Updates/SLE-Product-SLED/15/x86_64/update_debug/",
          "name": "SLE-Product-SLED15-Debuginfo-Updates",
          "description": "SLE-Product-SLED15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3103,
          "url": "/repo/SUSE/Products/SLE-Product-SLED/15/x86_64/product_debug/",
          "name": "SLE-Product-SLED15-Debuginfo-Pool",
          "description": "SLE-Product-SLED15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3104,
          "url": "/repo/SUSE/Products/SLE-Product-SLED/15/x86_64/product_source/",
          "name": "SLE-Product-SLED15-Source-Pool",
          "description": "SLE-Product-SLED15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "base",
      "shortname": "SLED15",
      "recommended": false
    },
    {
      "id": 1576,
      "name": "Basesystem Module",
      "identifier": "sle-module-basesystem",
      "former_identifier": "sle-module-basesystem",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "MODULE",
      "cpe": "cpe:/o:suse:sle-module-basesystem:15",
      "free": true,
      "description": "<p> The SUSE Linux Enterprise Basesystem Module delivers the base system of the product. </p>",
      "release_stage": "released",
      "eula_url": "",
      "repositories": [
        {
          "id": 2524,
          "url": "/repo/SUSE/Updates/SLE-Module-Basesystem/15/x86_64/update/",
          "name": "SLE-Module-Basesystem15-Updates",
          "description": "SLE-Module-Basesystem15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2525,
          "url": "/repo/SUSE/Updates/SLE-Module-Basesystem/15/x86_64/update_debug/",
          "name": "SLE-Module-Basesystem15-Debuginfo-Updates",
          "description": "SLE-Module-Basesystem15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2526,
          "url": "/repo/SUSE/Products/SLE-Module-Basesystem/15/x86_64/product/",
          "name": "SLE-Module-Basesystem15-Pool",
          "description": "SLE-Module-Basesystem15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2527,
          "url": "/repo/SUSE/Products/SLE-Module-Basesystem/15/x86_64/product_debug/",
          "name": "SLE-Module-Basesystem15-Debuginfo-Pool",
          "description": "SLE-Module-Basesystem15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2528,
          "url": "/repo/SUSE/Products/SLE-Module-Basesystem/15/x86_64/product_source/",
          "name": "SLE-Module-Basesystem15-Source-Pool",
          "description": "SLE-Module-Basesystem15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "module",
      "shortname": "Basesystem-Module",
      "recommended": true
    },
    {
      "id": 1578,
      "name": "Desktop Applications Module",
      "identifier": "sle-module-desktop-applications",
      "former_identifier": "sle-module-desktop-applications",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "MODULE",
      "cpe": "cpe:/o:suse:sle-module-desktop-applications:15",
      "free": true,
      "description": "<p> The SUSE Linux Enterprise Desktop Applications Module delivers a basic set of Desktop functionality. </p> <p> Access to the Desktop Applications Module is included in your SUSE Linux Enterprise product subscription. </p>",
      "release_stage": "released",
      "eula_url": "",
      "repositories": [
        {
          "id": 2534,
          "url": "/repo/SUSE/Updates/SLE-Module-Desktop-Applications/15/x86_64/update/",
          "name": "SLE-Module-Desktop-Applications15-Updates",
          "description": "SLE-Module-Desktop-Applications15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2535,
          "url": "/repo/SUSE/Updates/SLE-Module-Desktop-Applications/15/x86_64/update_debug/",
          "name": "SLE-Module-Desktop-Applications15-Debuginfo-Updates",
          "description": "SLE-Module-Desktop-Applications15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2536,
          "url": "/repo/SUSE/Products/SLE-Module-Desktop-Applications/15/x86_64/product/",
          "name": "SLE-Module-Desktop-Applications15-Pool",
          "description": "SLE-Module-Desktop-Applications15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2537,
          "url": "/repo/SUSE/Products/SLE-Module-Desktop-Applications/15/x86_64/product_debug/",
          "name": "SLE-Module-Desktop-Applications15-Debuginfo-Pool",
          "description": "SLE-Module-Desktop-Applications15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2538,
          "url": "/repo/SUSE/Products/SLE-Module-Desktop-Applications/15/x86_64/product_source/",
          "name": "SLE-Module-Desktop-Applications15-Source-Pool",
          "description": "SLE-Module-Desktop-Applications15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "module",
      "shortname": "Desktop-Applications-Module",
      "recommended": true
    },
    {
      "id": 1579,
      "name": "Development Tools Module",
      "identifier": "sle-module-development-tools",
      "former_identifier": "sle-sdk",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "MODULE",
      "cpe": "cpe:/o:suse:sle-module-development-tools:15",
      "free": true,
      "description": "<p> The Development Tools Module helps you developing applications for SUSE Linux Enterprise 15. </p> <p> Access to the Development Tools Module is included in your SUSE Linux Enterprise product subscription. The module has a different lifecycle than SUSE Linux Enterprise itself. </p>",
      "release_stage": "released",
      "eula_url": "",
      "repositories": [
        {
          "id": 2539,
          "url": "/repo/SUSE/Updates/SLE-Module-Development-Tools/15/x86_64/update/",
          "name": "SLE-Module-DevTools15-Updates",
          "description": "SLE-Module-DevTools15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2540,
          "url": "/repo/SUSE/Updates/SLE-Module-Development-Tools/15/x86_64/update_debug/",
          "name": "SLE-Module-DevTools15-Debuginfo-Updates",
          "description": "SLE-Module-DevTools15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2541,
          "url": "/repo/SUSE/Products/SLE-Module-Development-Tools/15/x86_64/product/",
          "name": "SLE-Module-DevTools15-Pool",
          "description": "SLE-Module-DevTools15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2542,
          "url": "/repo/SUSE/Products/SLE-Module-Development-Tools/15/x86_64/product_debug/",
          "name": "SLE-Module-DevTools15-Debuginfo-Pool",
          "description": "SLE-Module-DevTools15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2543,
          "url": "/repo/SUSE/Products/SLE-Module-Development-Tools/15/x86_64/product_source/",
          "name": "SLE-Module-DevTools15-Source-Pool",
          "description": "SLE-Module-DevTools15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "module",
      "shortname": "Development-Tools-Module",
      "recommended": false
    },
    {
      "id": 1583,
      "name": "SUSE Linux Enterprise Workstation Extension",
      "identifier": "sle-we",
      "former_identifier": "sle-we",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "SLE-WE",
      "cpe": "cpe:/o:suse:sle-we:15",
      "free": false,
      "description": "SUSE Linux Enterprise Workstation Extension adds additional functionality to a base SUSE Linux Enterprise installation. The Workstation Extension offers additional desktop applications (office suite, email client, graphical editor, multimedia tools) and libraries. Workstation Extension is enabled and installed by default on SUSE Linux Enterprise Desktop installation. Adding the Workstation Extension to a SUSE Linux Enterprise Server installation allows to seamlessly combine both products to create a full featured server workstation.",
      "release_stage": "released",
      "eula_url": "/repo/SUSE/Products/SLE-Product-WE/15/x86_64/product.license/",
      "repositories": [
        {
          "id": 2742,
          "url": "/repo/SUSE/Updates/SLE-Product-WE/15/x86_64/update/",
          "name": "SLE-Product-WE15-Updates",
          "description": "SLE-Product-WE15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2743,
          "url": "/repo/SUSE/Updates/SLE-Product-WE/15/x86_64/update_debug/",
          "name": "SLE-Product-WE15-Debuginfo-Updates",
          "description": "SLE-Product-WE15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 2744,
          "url": "/repo/SUSE/Products/SLE-Product-WE/15/x86_64/product/",
          "name": "SLE-Product-WE15-Pool",
          "description": "SLE-Product-WE15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2745,
          "url": "/repo/SUSE/Products/SLE-Product-WE/15/x86_64/product_debug/",
          "name": "SLE-Product-WE15-Debuginfo-Pool",
          "description": "SLE-Product-WE15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2746,
          "url": "/repo/SUSE/Products/SLE-Product-WE/15/x86_64/product_source/",
          "name": "SLE-Product-WE15-Source-Pool",
          "description": "SLE-Product-WE15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 2747,
          "url": "https://download.nvidia.com/suse/sle15/",
          "name": "SLE-15-GA-Desktop-NVIDIA-Driver",
          "description": "SLE-15-GA-Desktop-NVIDIA-Driver",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        }
      ],
      "product_type": "extension",
      "shortname": "SLEWE15",
      "recommended": true
    },
    {
      "id": 1728,
      "name": "SUSE Cloud Application Platform Tools Module",
      "identifier": "sle-module-cap-tools",
      "former_identifier": "sle-module-cap-tools",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "MODULE",
      "cpe": "cpe:/o:suse:sle-module-cap-tools:15",
      "free": true,
      "description": "<p> The SUSE Cloud Application Platform Tools Module is a collection of tools that enables you to interact with the SUSE Cloud Application Platform product itself, providing the commandline client for instance. </p> <p> Access to the SUSE Cloud Application Platform Tools Module is included in your SUSE Linux Enterprise Server subscription. The module has a different lifecycle than SUSE Linux Enterprise Server itself; please check the Release Notes for further details. </p>",
      "release_stage": "released",
      "eula_url": "",
      "repositories": [
        {
          "id": 3000,
          "url": "/repo/SUSE/Updates/SLE-Module-CAP-Tools/15/x86_64/update/",
          "name": "SLE-Module-CAP-Tools15-Updates",
          "description": "SLE-Module-CAP-Tools15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3001,
          "url": "/repo/SUSE/Updates/SLE-Module-CAP-Tools/15/x86_64/update_debug/",
          "name": "SLE-Module-CAP-Tools15-Debuginfo-Updates",
          "description": "SLE-Module-CAP-Tools15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3002,
          "url": "/repo/SUSE/Products/SLE-Module-CAP-Tools/15/x86_64/product/",
          "name": "SLE-Module-CAP-Tools15-Pool",
          "description": "SLE-Module-CAP-Tools15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3003,
          "url": "/repo/SUSE/Products/SLE-Module-CAP-Tools/15/x86_64/product_debug/",
          "name": "SLE-Module-CAP-Tools15-Debuginfo-Pool",
          "description": "SLE-Module-CAP-Tools15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3123,
          "url": "/repo/SUSE/Products/SLE-Module-CAP-Tools/15/x86_64/product_source/",
          "name": "SLE-Module-CAP-Tools15-Source-Pool",
          "description": "SLE-Module-CAP-Tools15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "module",
      "shortname": "SUSE-CAP-Tools-Module",
      "recommended": false
    },
    {
      "id": 1743,
      "name": "SUSE Package Hub",
      "identifier": "PackageHub",
      "former_identifier": "PackageHub",
      "version": "15",
      "release_type": null,
      "arch": "x86_64",
      "product_class": "MODULE",
      "cpe": "cpe:/o:suse:packagehub:15",
      "free": true,
      "description": "SUSE Package Hub is a free of charge extension providing access to community maintained packages built to run on SUSE Linux Enterprise Server. Built from the same sources used in the openSUSE distributions, these quality packages provide additional software to what is found in the SUSE Linux Enterprise Server product. Packages from the Package Hub are delivered without L3 support from SUSE. General updates and fixes to the packages in SUSE Package Hub are provided by the openSUSE community based on their discretion though SUSE will monitor and ensure that any known critical security issues will be addressed. Packages in the Package Hub are approved by SUSE for use with SUSE Linux Enterprise Server 15 and to not interfere with the supportability of SUSE Linux Enterprise Server it's modules and extensions. For more information about SUSE Package Hub please visit https://packagehub.suse.com.",
      "release_stage": "released",
      "eula_url": "",
      "repositories": [
        {
          "id": 3059,
          "url": "/repo/SUSE/Backports/SLE-15_x86_64/standard/",
          "name": "SUSE-PackageHub-15-Standard-Pool",
          "description": "SUSE-PackageHub-15-Standard-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3060,
          "url": "/repo/SUSE/Backports/SLE-15_x86_64/standard_debug/",
          "name": "SUSE-PackageHub-15-Debuginfo",
          "description": "SUSE-PackageHub-15-Debuginfo for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3061,
          "url": "/repo/SUSE/Backports/SLE-15_x86_64/product/",
          "name": "SUSE-PackageHub-15-Pool",
          "description": "SUSE-PackageHub-15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3182,
          "url": "/repo/SUSE/Updates/SLE-Module-Packagehub-Subpackages/15/x86_64/update/",
          "name": "SLE-Module-Packagehub-Subpackages15-Updates",
          "description": "SLE-Module-Packagehub-Subpackages15-Updates for sle-15-x86_64",
          "enabled": true,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3183,
          "url": "/repo/SUSE/Updates/SLE-Module-Packagehub-Subpackages/15/x86_64/update_debug/",
          "name": "SLE-Module-Packagehub-Subpackages15-Debuginfo-Updates",
          "description": "SLE-Module-Packagehub-Subpackages15-Debuginfo-Updates for sle-15-x86_64",
          "enabled": false,
          "autorefresh": true,
          "installer_updates": false
        },
        {
          "id": 3184,
          "url": "/repo/SUSE/Products/SLE-Module-Packagehub-Subpackages/15/x86_64/product/",
          "name": "SLE-Module-Packagehub-Subpackages15-Pool",
          "description": "SLE-Module-Packagehub-Subpackages15-Pool for sle-15-x86_64",
          "enabled": true,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3185,
          "url": "/repo/SUSE/Products/SLE-Module-Packagehub-Subpackages/15/x86_64/product_debug/",
          "name": "SLE-Module-Packagehub-Subpackages15-Debuginfo-Pool",
          "description": "SLE-Module-Packagehub-Subpackages15-Debuginfo-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        },
        {
          "id": 3186,
          "url": "/repo/SUSE/Products/SLE-Module-Packagehub-Subpackages/15/x86_64/product_source/",
          "name": "SLE-Module-Packagehub-Subpackages15-Source-Pool",
          "description": "SLE-Module-Packagehub-Subpackages15-Source-Pool for sle-15-x86_64",
          "enabled": false,
          "autorefresh": false,
          "installer_updates": false
        }
      ],
      "product_type": "extension",
      "shortname": "SUSE-PackageHub-15",
      "recommended": false
    }
  ]`;


var jsonData = JSON.parse(data);


var urlParams = new URLSearchParams(window.location.search);
var rmtId = urlParams.get('id');

var pageData = jsonData.find(val=> val.id+"" === rmtId+"")

if(!pageData){
    window.location = "./index.html"
}

var domTobeInserted = `
    <div class="px-4 py-5 text-center bg-body-tertiary">
    <h1 class="display-5 fw-bold pb-4">${pageData.name}</h1>
    <div class="col-lg-8 mx-auto">
        <p class="lead mb-4">${pageData.description}</p>
    </div>
    <div class="mb-4 col-lg-6-auto">
        <span class="badge rounded-pill text-bg-success">shortname: ${pageData.shortname}</span>
        <span class="badge rounded-pill text-bg-success">arch: ${pageData.arch}</span>
        <span class="badge rounded-pill text-bg-success">identifier: ${pageData.identifier}</span>
        <span class="badge rounded-pill text-bg-success">release_stage: "${pageData.release_stage}"</span>
    </div>
    </div>
`
var detailsTobeInserted = ""
pageData.repositories.forEach(element => {
    detailsTobeInserted+= `
    <div class="col-sm-6 col-lg-4 d-flex align-items-stretch">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <div class="mb-4">
                <span class="badge rounded-pill text-bg-success">installer_updates: ${element.installer_updates}</span>
                <span class="badge rounded-pill text-bg-success">autorefresh: ${element.autorefresh}</span>
                <span class="badge rounded-pill text-bg-success">enabled: ${element.enabled}</span>
            </div>
            <a href="${element.url}" class="btn btn-outline-success" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
</svg>
                Download
              </a>
        </div>
    </div>
</div>
    `
    
});
const elementId = document.getElementById("suse-detail-container");
elementId.innerHTML = domTobeInserted;

var repoId = document.getElementById("suse-repo-container");
repoId.innerHTML = detailsTobeInserted;