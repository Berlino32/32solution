import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card';

@Component({
  selector: 'app-showcase',
  standalone: true,
  //imports: [CommonModule, FeatureCardComponent],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css'
})
export class Showcase {
  features = [
    { title: 'Box ESP', desc: '2D bounding box with optional filled overlay. Per-player color picker. Rainbow mode cycles hue over time.', tags: ['Filled box', 'Rainbow mode', 'Color picker'] },
    { title: 'Skeleton ESP', desc: 'Full skeleton rendered bone by bone. Adjustable line thickness, rainbow mode, and independent color picker.', tags: ['15+ bones', 'Thickness slider', 'Rainbow'] },
    { title: 'Health & Armor', desc: 'Live health bar and percentage text, armor bar, all with independent color pickers. Always up to date.', tags: ['Health bar', 'Health text', 'Armor bar'] },
    { title: 'Player Info', desc: 'Username, equipped weapon name, distance. Each with position selector and independent color.', tags: ['Name + weapon', 'Distance', 'Snap lines'] },
    { title: 'Friend Marker', desc: 'Tag any player as friend from the World tab. Custom friend color. Persists even after players go out of range.', tags: ['Keybind', 'Custom color', 'Persistent'] },
    { title: 'Visible Check', desc: 'Pinpoint precision — detects when a player is behind any object. Separate colors for visible vs. occluded.', tags: ['Internal-cheat precision', 'Any object', 'Dual color', 'Visible only'] },
    { title: 'ESP Preview', desc: 'Live in-menu preview of every ESP element as you enable it.', tags: ['Live preview', 'Per-element', 'In-menu'] },
    { title: 'Vehicle ESP', desc: 'Name, distance, lock/unlock indicator, snap lines with origin selector.', tags: ['Name + distance', 'Lock status', 'Snap lines'] },
    { title: 'Player Tracer', desc: 'Trail effect that follows player movement, making target tracking easier in fast-paced gunfights.', tags: ['Trail effect', 'Independent toggle'] },
    { title: 'Head Circle', desc: 'Precise circle drawn around the head bone of every entity. Scales dynamically.', tags: ['Dynamic scale', 'Head bone'] }
  ];
}