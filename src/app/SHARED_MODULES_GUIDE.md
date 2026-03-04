// =========================================
// GUIA DE USO - SHARED_MODULES
// =========================================

/*
COMO USAR O ARQUIVO DE MÓDULOS GLOBAIS:

O arquivo 'shared.module.ts' contém todos os módulos Angular e Material
compartilhados que seus componentes precisam. Isso evita importações repetidas
em cada componente.

EXEMPLO 1: Componente com poucos módulos (sem usar SHARED_MODULES)
┌─────────────────────────────────────────────────────────────┐
│ import { Component } from '@angular/core';                  │
│ import { CommonModule } from '@angular/common';             │
│ import { FormsModule } from '@angular/forms';               │
│ import { MatButtonModule } from '@angular/material/button'; │
│                                                              │
│ @Component({                                                │
│   selector: 'app-example',                                  │
│   imports: [                                                │
│     CommonModule,                                           │
│     FormsModule,                                            │
│     MatButtonModule                                         │
│   ],                                                        │
│   templateUrl: './example.component.html',                  │
│   styleUrl: './example.component.scss'                      │
│ })                                                           │
│ export class ExampleComponent {}                            │
└─────────────────────────────────────────────────────────────┘

EXEMPLO 2: Componente usando SHARED_MODULES (RECOMENDADO)
┌──────────────────────────────────────────────────────────┐
│ import { Component } from '@angular/core';               │
│ import { SHARED_MODULES } from '../../shared.module';    │
│                                                          │
│ @Component({                                            │
│   selector: 'app-example',                              │
│   imports: [...SHARED_MODULES],                         │
│   templateUrl: './example.component.html',              │
│   styleUrl: './example.component.scss'                  │
│ })                                                       │
│ export class ExampleComponent {}                        │
└──────────────────────────────────────────────────────────┘

EXEMPLO 3: Componente usando SHARED_MODULES + módulos específicos
┌───────────────────────────────────────────────────────────────────┐
│ import { Component } from '@angular/core';                        │
│ import { SHARED_MODULES } from '../../shared.module';            │
│ import { MatDatepickerModule } from '@angular/material/datepicker'; │
│                                                                    │
│ @Component({                                                      │
│   selector: 'app-example',                                        │
│   imports: [...SHARED_MODULES, MatDatepickerModule],             │
│   templateUrl: './example.component.html',                        │
│   styleUrl: './example.component.scss'                            │
│ })                                                                 │
│ export class ExampleComponent {}                                  │
└───────────────────────────────────────────────────────────────────┘

MÓDULOS INCLUSOS NO SHARED_MODULES:

ANGULAR MODULES:
  • CommonModule         - Diretivas comuns (ngIf, ngFor, ngClass, etc)
  • FormsModule          - Template-driven forms
  • ReactiveFormsModule  - Reactive forms
  • HttpClientModule     - HTTP requests
  • RouterModule         - Roteamento

ANGULAR MATERIAL:
  • MatButtonModule          - Botões
  • MatCardModule            - Cards
  • MatFormFieldModule       - Form fields
  • MatInputModule           - Input fields
  • MatToolbarModule         - Toolbar
  • MatMenuModule            - Menus
  • MatIconModule            - Icons
  • MatListModule            - Listas
  • MatProgressSpinnerModule - Loading spinners
  • MatDialogModule          - Diálogos
  • MatTabsModule            - Abas
  • MatSlideToggleModule     - Toggle switches
  • MatSnackBarModule        - Notificações
  • MatSidenavModule         - Sidenav/Drawer
  • MatPaginatorModule       - Paginação
  • MatTableModule           - Tabelas
  • MatSortModule            - Sorting

COMO ADICIONAR MAIS MÓDULOS:

Se precisar adicionar mais módulos, edite o arquivo 'shared.module.ts':

1. Importe o módulo no topo do arquivo
2. Adicione à array ANGULAR_MODULES ou MATERIAL_MODULES
3. Os componentes usarão automaticamente o novo módulo

EXEMPLO:
import { MatAutocompleteModule } from '@angular/material/autocomplete';
...
const MATERIAL_MODULES = [
  // ... módulos existentes
  MatAutocompleteModule  // novo módulo
];
*/
