import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-countiries-select',
  templateUrl: './countiries-select.component.html',
  styleUrls: ['./countiries-select.component.scss']
})
export class CountriesSelectComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>()

  selectedCountry!: string;
  countries!: any[];

  constructor(
    private service : CountryService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.loadCoutries()
  }

  loadCoutries() {
    this.service.getCountries().subscribe(coutries => {
      this.countries = coutries;
    })
  }
}
