# Ireckonu

## Run App
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Project Structure

### Modules
Applying lazy loading—a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
 - app.module.ts
 - profile-search.module.ts
 - profile-details.module.ts
 - shared.module.ts
 
### Components
  **profile-search.component.ts** --> parent component search page 
  **profile-details.component.ts** --> Parent component for profile details page
  **details-tab.component** --> Child component for 'Profile Details' tab
  **profile-id-tab.component** --> Child component for 'Profile ID's' tab  
  **activit-timeline-tab.component.ts** --> Child component for 'Activity Timeline' tab
  
### Shared Components
   **header.component.ts** --> App header component
   **side-bar.component.ts** --> empty component in case we need to add sidebar
   **notification-message.component** --> Generic component to display message to use, for example, when no data displayed in table
   **spinner.component** --> Generic component to display/hide spinner automatically if need HTTP request triggered
   **card.component** --> Generic card component to use in different pages
   **error-dialog.component** --> Generic component displayed automatically if there is HTTP error occurred.
  
  ### Services
   **profile-service.ts** --> shared service as search and details different modules 
   **httpconfig-interceptor.service.ts** --> HTTP interceptor can be used for different cases, set header automatically, stop/start spinner, handle error and etc.

### Models
**profile.model.ts** --> interface for profile model

### Pipes
 **telephone.pipe.ts** --> Add country code and format phone number, for example (+31)123.133.123
 **empty.pipe.ts"** --> Replace empty value with **'-'**
 
 ### Utils
 **config-loader.service.ts** --> service run when start SPA in order to load all configurations file needed 
 **custom-translate-loader.component.ts** use to configure SPA language

### Constants
**define.ts** --> contains all constants value for the whole SPA
**routes-config** --> contains all API end point name.

### Configuration
 **pages-config.ts --> contains all pages configuration like routes, pages title and etc.
 
 ### Asset
 **i18n/en.json** --> contains all static language for the whole SPA.

